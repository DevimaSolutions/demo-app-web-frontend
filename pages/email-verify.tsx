import { AuthAccessLevel, UserStatus } from '@/constants';
import { VerifyEmail } from '@/page-content';
import { Layout } from '@/types';
import { withPageSettings } from '@/utils';

export default function EmailVerifyPage() {
  return <VerifyEmail />;
}

export const getServerSideProps = withPageSettings({
  auth: {
    accessLevel: AuthAccessLevel.Authorized,
    onlyForStatus: [UserStatus.Pending],
  },
  metaData: { title: 'Verify email' },
  layout: Layout.Auth,
});
