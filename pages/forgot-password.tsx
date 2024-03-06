import { AuthAccessLevel } from '@/constants';
import { ForgotPassword } from '@/page-content';
import { Layout } from '@/types';
import { withPageSettings } from '@/utils';

export default function SignInPage() {
  return <ForgotPassword />;
}

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Unauthorized },
  metaData: { title: 'Forgot password' },
  layout: Layout.Auth,
});
