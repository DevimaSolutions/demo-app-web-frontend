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
  const [onlineUsers, setOnlineUsers] = useState<IUserOnlineResponse>({});

  const { friends, isLoading, hasMore } = useSelector(friendsSelector);

  const loadMore = useCallback(() => {
    dispatch(getFriends({})).unwrap();
  }, [dispatch]);

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

  return {
    friends,
    hasMore,
    isFriendsLoading: isLoading,
    hasFriendsInit,
    handleRedirect,
    loadMore,
    checkOnline,
  };
};

export default useFriendsSection;
