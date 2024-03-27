import { useEffect } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { friendsSelector, isLoadingSelector } from '@/redux/friends/selectors';
import { resetState } from '@/redux/friends/slice';
import { getFriends } from '@/redux/friends/thunk';

const useDashboard = () => {
  const friends = useSelector(friendsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriends()).unwrap();
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return { friends, isFriendsLoading: isLoading };
};

export default useDashboard;
