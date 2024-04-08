import { useEffect } from 'react';

import { firebaseAuth } from '@/modules';
import { presenceService } from '@/services';

const useUserPresence = () => {
  const userId = firebaseAuth.currentUser?.uid;

  useEffect(() => {
    if (!userId) {
      return;
    }

    return presenceService.trackUserPresence(userId);
  }, [userId]);
};

export default useUserPresence;
