import { signInWithCustomToken } from 'firebase/auth';

import { firebaseAuth } from '@/modules';
import { getAuthManager } from '@/utils';

import presenceService from './presence.service';

const getCustomToken = async () => {
  const auth = await getAuthManager();
  return auth.axios.get<string>('/auth/firebase/token').then((res) => res.data);
};

const authorizeUser = async () => {
  const token = await getCustomToken();
  await signInWithCustomToken(firebaseAuth, token);
};

const signOutUser = async () => {
  if (!firebaseAuth.currentUser?.uid) {
    return;
  }
  await presenceService.setUserOffline(firebaseAuth.currentUser.uid);
  await firebaseAuth.signOut();
};

const firebaseAuthService = { authorizeUser, signOutUser };

export default firebaseAuthService;
