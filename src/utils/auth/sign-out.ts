import { firebaseAuth } from '@/modules';
import { presenceService } from '@/services';
import { getAuthManager } from '@/utils';

const signOut = async () => {
  console.log(firebaseAuth.currentUser);

  if (firebaseAuth.currentUser?.uid) {
    await presenceService.setUserOffline(firebaseAuth.currentUser.uid);
  }
  await firebaseAuth.signOut();

  await getAuthManager().then((auth) => auth.signOut());
};

export default signOut;
