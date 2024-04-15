import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { errorMessages } from '@/constants';
import { storeService } from '@/services';
import { getEnv } from '@/utils/env/env.util';

import type { ISubscriptionVariant } from '@/data-transfer/responses';

const useStore = () => {
  const [variants, setVariants] = useState<ISubscriptionVariant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { frontendUrl } = getEnv();
  const router = useRouter();

  const handleCreateSubscriptionSession = async (priceId: string) => {
    setIsLoading(true);
    try {
      const link = await storeService.createSubscriptionSession({
        stripPriceId: priceId,
        successUrl: frontendUrl,
        cancelUrl: frontendUrl,
      });

      router.push(link.sessionUrl);
    } catch (error) {
      setIsLoading(false);
      toast.error(errorMessages.somethingWentWrong);
    }
  };

  useEffect(() => {
    storeService.getSubscriptionVariants().then((res) => setVariants(res));
  }, []);
  return { variants, handleCreateSubscriptionSession, isLoading };
};

export default useStore;
