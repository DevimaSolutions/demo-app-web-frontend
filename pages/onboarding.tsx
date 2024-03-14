import { AuthAccessLevel } from '@/constants';
import { Onboarding } from '@/page-content';
import { Layout } from '@/types';
import { withPageSettings } from '@/utils';

export default function OnboardingPage() {
  return <Onboarding />;
}

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Authorized, isOnboardingRequired: false },
  metaData: { title: 'Onboarding' },
  layout: Layout.Onboarding,
});
