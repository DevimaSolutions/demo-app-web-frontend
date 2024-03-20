import { AuthAccessLevel } from '@/constants';
import { PrivacyPolicy } from '@/page-content';
import { Layout } from '@/types';
import { withPageSettings } from '@/utils';

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Public },
  metaData: { title: 'Privacy Policy' },
  layout: Layout.Main,
});
