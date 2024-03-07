import { useSelector } from '@/hooks';
import { resetPasswordSent } from '@/redux/authorization/selectors';

const useForgotPassword = () => {
  const isPasswordSend = useSelector(resetPasswordSent);

  return { isPasswordSend };
};

export default useForgotPassword;
