import { AuthAccessLevel } from '@/constants';
import { Layout } from '@/types';
import { withPageSettings } from '@/utils';

export default function OnboardingPage() {
  return <div>OnboardingPage</div>;
}

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Authorized, isOnboardingRequired: false },
  metaData: { title: 'Verify email' },
  layout: Layout.Auth,
});
