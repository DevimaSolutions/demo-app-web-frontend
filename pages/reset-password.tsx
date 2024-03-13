import { AuthAccessLevel } from '@/constants';
import { ResetPassword } from '@/page-content';
import { Layout } from '@/types';
import { withPageSettings } from '@/utils';

import type { IPasswordResetPageProps } from '@/page-content/auth/ResetPassword/types';

export default function ResetPasswordPage({ token }: IPasswordResetPageProps) {
  return <ResetPassword token={token} />;
}

export const getServerSideProps = withPageSettings(
  {
    auth: { accessLevel: AuthAccessLevel.Unauthorized },
    metaData: { title: 'Reset password' },
    layout: Layout.Auth,
  },
  async (context) => {
    const token = (context.query.token as string) ?? null;

    if (!token) {
      return {
        notFound: true,
      };
    }

    return {
      props: { token },
    };
  },
);
