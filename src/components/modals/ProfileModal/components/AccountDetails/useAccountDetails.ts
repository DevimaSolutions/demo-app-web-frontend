import { useAuthContext } from '@/context';

const useAccountDetails = () => {
  const { user } = useAuthContext();

  return { user };
};

export default useAccountDetails;
