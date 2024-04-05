import { signInWithCustomToken } from 'firebase/auth';

import { firebaseAuth } from '@/modules';
import { getAuthManager } from '@/utils';

const getCustomToken = async () => {
  const auth = await getAuthManager();
  return auth.axios.get<string>('/firebase').then((res) => res.data);
};

const authorizeUser = async () => {
  const token = await getCustomToken();
  signInWithCustomToken(firebaseAuth, token);
};

const firebaseAuthService = { authorizeUser };

export default firebaseAuthService;
