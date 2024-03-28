import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { friendsSelector, isLoadingSelector } from '@/redux/friends/selectors';
import { resetState } from '@/redux/friends/slice';
import { getFriends } from '@/redux/friends/thunk';

const useFriendsSection = () => {
  const friends = useSelector(friendsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getFriends({})).unwrap();
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  return { friends, isFriendsLoading: isLoading, handleRedirect };
};

export default useFriendsSection;
