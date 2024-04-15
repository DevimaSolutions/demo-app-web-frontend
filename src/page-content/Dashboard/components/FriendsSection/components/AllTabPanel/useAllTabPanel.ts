import { useCallback, useEffect, useState } from 'react';

import { FriendsOrderBy, OrderDirection } from '@/constants';
import { useDispatch, useSelector } from '@/hooks';
import { thunks, selectors } from '@/redux/friends';
import { resetState } from '@/redux/friends/slice';
import { presenceService } from '@/services';

import type { IUserOnlineResponse } from '@/modules';

const useAllTabPanel = () => {
  const { friends, isLoading, hasMore } = useSelector(selectors.friendsSelector);
  const dispatch = useDispatch();

  const [onlineUsers, setOnlineUsers] = useState<IUserOnlineResponse>({});
  const [search, setSearch] = useState<string>('');

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    dispatch(resetState());
    dispatch(
      thunks.getFriends({
        orderDirection: OrderDirection.DESC,
        orderBy: FriendsOrderBy.experience,
        ...(searchValue.length ? { search: searchValue } : {}),
      }),
    ).unwrap();
  };

  const loadMore = useCallback(() => {
    dispatch(
      thunks.getFriends({
        orderDirection: OrderDirection.DESC,
        orderBy: FriendsOrderBy.experience,
        ...(search.length ? { search } : {}),
      }),
    );
  }, [dispatch, search]);

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
    handleSearch,
  };
};

export default useAllTabPanel;
