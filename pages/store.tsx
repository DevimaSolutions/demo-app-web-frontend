import { AuthAccessLevel } from '@/constants';
import { Store } from '@/page-content';
import { withPageSettings } from '@/utils';

const StorePage = () => {
  return <Store />;
};

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Authorized },
  metaData: { title: 'Store' },
});

export default StorePage;
