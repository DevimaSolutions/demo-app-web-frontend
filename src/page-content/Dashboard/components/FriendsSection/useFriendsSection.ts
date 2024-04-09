import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useDispatch } from '@/hooks';
import { resetState } from '@/redux/friends/slice';
import { getFriends } from '@/redux/friends/thunk';

const useFriendsSection = () => {
  const [hasFriendsInit, setHasFriendsInit] = useState<boolean>(true);
  const [tabValue, setTabValue] = useState<number>(0);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getFriends({}))
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
