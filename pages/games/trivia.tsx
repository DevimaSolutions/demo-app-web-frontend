import { AuthAccessLevel } from '@/constants';
import { Trivia } from '@/games';
import { Layout } from '@/types';
import { withPageSettings } from '@/utils';

const StorePage = () => {
  return <Trivia />;
};

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Authorized },
  metaData: { title: 'Trivia game' },
  layout: Layout.Game,
});

export default StorePage;
