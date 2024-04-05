import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { friendsSelector } from '@/redux/friends/selectors';
import { resetState } from '@/redux/friends/slice';
import { getFriends } from '@/redux/friends/thunk';
import { presenceService } from '@/services';

import type { IUserOnlineResponse } from '@/modules';

const useFriendsSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [hasFriendsInit, setHasFriendsInit] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [onlineUsers, setOnlineUsers] = useState<IUserOnlineResponse>({});

  const { friends, isLoading, hasMore } = useSelector(friendsSelector);

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

  const fetchUsersOnline = useCallback((ids: string[]) => {
    return presenceService.fetchUsersOnline({
      ids,
      callback: (value) => setOnlineUsers((s) => ({ ...s, ...value })),
    });
  }, []);

  const checkOnline = useCallback(
    (id: string) => onlineUsers[id]?.state === 'online',
    [onlineUsers],
  );

  useEffect(() => {
    if (friends.length) {
      const unsubscribe = fetchUsersOnline(friends.map(({ id }) => id));

      return unsubscribe;
    }
  }, [fetchUsersOnline, friends]);

  console.log(onlineUsers);

  return {
    friends,
    hasMore,
    isLoading,
    hasFriendsInit,
    handleRedirect,
    handleSearch,
    loadMore,
    checkOnline,
  };
};

export default useFriendsSection;
