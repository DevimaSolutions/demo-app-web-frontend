import { firebaseAuth } from '@/modules';
import { presenceService } from '@/services';

const useUserPresence = () => {
  firebaseAuth.onAuthStateChanged((user) => {
    if (user?.uid) {
      presenceService.trackUserPresence(user.uid);
    }
  });
};

export default useUserPresence;
