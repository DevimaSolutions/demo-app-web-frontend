import { AuthAccessLevel } from '@/constants';
import { Arcades } from '@/page-content';
import { withPageSettings } from '@/utils';

const ArcadesPage = () => <Arcades />;

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Authorized },
  metaData: { title: 'Arcades' },
});

export default ArcadesPage;
