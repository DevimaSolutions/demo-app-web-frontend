import { AuthAccessLevel } from '@/constants';
import { TermsAndConditions } from '@/page-content';
import { Layout } from '@/types';
import { withPageSettings } from '@/utils';

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Public },
  metaData: { title: 'Terms and Conditions' },
  layout: Layout.Main,
});
