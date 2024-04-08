import { firebaseAuthService } from '@/services';
import { getAuthManager } from '@/utils';

const signOut = async () => {
  await getAuthManager().then((auth) => auth.signOut());
  await firebaseAuthService.signOutUser();
};

export default signOut;
