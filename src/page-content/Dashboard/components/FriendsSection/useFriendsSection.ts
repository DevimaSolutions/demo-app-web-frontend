import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { FriendsOrderBy, OrderDirection } from '@/constants';
import { useDispatch } from '@/hooks';
import { thunks } from '@/redux/friends';
import { resetState } from '@/redux/friends/slice';

const useFriendsSection = () => {
  const [hasFriendsInit, setHasFriendsInit] = useState<boolean>(true);
  const [tabValue, setTabValue] = useState<number>(0);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(
      thunks.getFriends({
        orderDirection: OrderDirection.DESC,
        orderBy: FriendsOrderBy.experience,
      }),
    )
      .unwrap()
      .then((res) => setHasFriendsInit(!!res?.items.length));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return {
    tabValue,
    handleTabChange,
    hasFriendsInit,
    handleRedirect,
  };
};

export default useFriendsSection;
