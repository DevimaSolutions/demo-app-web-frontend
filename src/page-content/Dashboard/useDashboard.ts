import { useAuthContext } from '@/context';
const useDashboard = () => {
  const { user } = useAuthContext();
  return { user };
};

export default useDashboard;
