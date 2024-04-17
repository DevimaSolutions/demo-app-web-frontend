import { useSelector } from 'react-redux';

import { gameUserSelector } from '@/redux/games/selectors';

const useGameLayout = () => {
  const userGameStats = useSelector(gameUserSelector);
  return { userGameStats };
};

export default useGameLayout;
