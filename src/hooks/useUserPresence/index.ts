// import { useFirebaseAuth } from 'context/firebaseAuth';
import { useEffect } from 'react';

import { presenceService } from '@/services';
// import chatService from 'services/chat.service';

// TODO: add firebase auth provider
const useUserPresence = (userId: string) => {
  //   const { user } = useFirebaseAuth();

  useEffect(() => {
    if (!userId) {
      return;
    }

    return presenceService.trackUserPresence(userId);
  }, [userId]);
};

export default useUserPresence;
