import { useSelector } from '@/hooks';
import { selectors } from '@/redux/authorization';

const useForgotPassword = () => {
  const isPasswordSend = useSelector(selectors.resetPasswordSent);

  return { isPasswordSend };
};

export default useForgotPassword;
