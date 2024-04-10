import { useRouter } from 'next/router';

const useBalanceSection = () => {
  const router = useRouter();

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  return { handleRedirect };
};

export default useBalanceSection;
