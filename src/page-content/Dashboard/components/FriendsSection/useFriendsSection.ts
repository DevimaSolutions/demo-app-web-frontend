import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { friendsSelector, isLoadingSelector } from '@/redux/friends/selectors';
import { resetState } from '@/redux/friends/slice';
import { getFriends } from '@/redux/friends/thunk';

const useFriendsSection = () => {
  const friends = useSelector(friendsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const [hasFriendsInit, setHasFriendsInit] = useState<boolean>(true);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = (searchValue: string) => {
    if (!searchValue.length) {
      dispatch(getFriends({})).unwrap();
      return;
    }
    dispatch(getFriends({ search: searchValue })).unwrap();
  };

  useEffect(() => {
    dispatch(getFriends({}))
      .unwrap()
      .then((res) => setHasFriendsInit(!!res?.items.length));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  return { hasFriendsInit, friends, isFriendsLoading: isLoading, handleRedirect, handleSearch };
};

export default useFriendsSection;
