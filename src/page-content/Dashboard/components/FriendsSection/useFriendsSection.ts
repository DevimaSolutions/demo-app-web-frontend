import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { friendsSelector } from '@/redux/friends/selectors';
import { resetState } from '@/redux/friends/slice';
import { getFriends } from '@/redux/friends/thunk';

const useFriendsSection = () => {
  const { friends, isLoading, hasMore } = useSelector(friendsSelector);
  const [hasFriendsInit, setHasFriendsInit] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    dispatch(resetState());
    dispatch(getFriends(searchValue.length ? { search: searchValue } : {})).unwrap();
  };

  const loadMore = useCallback(() => {
    dispatch(getFriends(search.length ? { search } : {})).unwrap();
  }, [dispatch, search]);

  useEffect(() => {
    dispatch(getFriends({}))
      .unwrap()
      .then((res) => setHasFriendsInit(!!res?.items.length));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  return {
    hasFriendsInit,
    friends,
    isFriendsLoading: isLoading,
    handleRedirect,
    handleSearch,
    loadMore,
    hasMore,
  };
};

export default useFriendsSection;
