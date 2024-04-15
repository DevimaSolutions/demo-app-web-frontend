import { useMemo } from 'react';

import { useAuthContext } from '@/context';
const useDashboard = () => {
  const { user } = useAuthContext();

  const isEliteUser = useMemo(() => {
    // TODO: Temporary solution
    return !!user?.subscriptions.length;
  }, [user?.subscriptions.length]);

  return { user, isEliteUser };
};

export default useDashboard;
