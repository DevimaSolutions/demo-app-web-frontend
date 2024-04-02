import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { envUtil } from '@/utils';

const useDetectIos = () => {
  const router = useRouter();
  const { links } = envUtil.getEnv();

  useEffect(() => {
    if (router.query.deviceType === 'iOS') {
      router.push(links.iosAppBundleLink + router.asPath.slice(1));
    }
  }, [links.iosAppBundleLink, router]);
};

export default useDetectIos;
