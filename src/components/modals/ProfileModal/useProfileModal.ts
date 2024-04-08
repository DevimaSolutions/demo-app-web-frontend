import { useEffect } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { profileSelector } from '@/redux/profile/selectors';
import { getProfile } from '@/redux/profile/thunk';

const useProfileModal = () => {
  const { profile, isLoading } = useSelector(profileSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile({})).unwrap();
  }, [dispatch]);

  return { profile, isLoading };
};

export default useProfileModal;
