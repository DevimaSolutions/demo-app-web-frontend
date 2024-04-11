import { useCallback, useEffect, useState } from 'react';

import { SortDirection } from '@/constants';
import { useDispatch, useSelector } from '@/hooks';
import { thunks, selectors, OrderByField } from '@/redux/friends';
import { presenceService } from '@/services';

import type { IUserOnlineResponse } from '@/modules';

const useAllTabPanel = () => {
  const { friends, isLoading, hasMore } = useSelector(selectors.friendsSelector);
  const dispatch = useDispatch();
  const [onlineUsers, setOnlineUsers] = useState<IUserOnlineResponse>({});

  const loadMore = useCallback(() => {
    dispatch(thunks.getFriends({ order: SortDirection.DESC, sort: OrderByField.experience }));
  }, [dispatch]);

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
    isFriendsLoading: isLoading,
    loadMore,
    hasMore,
    checkOnline,
  };
};

export default useAllTabPanel;
