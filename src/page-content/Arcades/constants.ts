import { GameState } from './components/GameContainer/types';

const games = [
  {
    title: 'Trivia',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: 'Info',
    progress: 4,
    contentImage: '/assets/icons/elite.png',
    state: GameState.Selected,
    infoTitle: 'Title',
    infoContent:
      'Fusce sit amet nulla tellus. Morbi et mollis purus. Nullam blandit commodo nisi sed varius. Cras pretium blandit elementum. Sed malesuada malesuada turpis vel faucibus. Nam pretium est erat, egestas convallis mauris tincidunt eget. ',
  },
  {
    title: 'Trivia',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: 'Info',
    progress: 4,
    contentImage: '/assets/icons/elite.png',
    state: GameState.Default,
    infoTitle: 'Title',
    infoContent:
      'Fusce sit amet nulla tellus. Morbi et mollis purus. Nullam blandit commodo nisi sed varius. Cras pretium blandit elementum. Sed malesuada malesuada turpis vel faucibus. Nam pretium est erat, egestas convallis mauris tincidunt eget. ',
  },
  {
    title: 'Trivia',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: 'Info',
    progress: 4,
    contentImage: '/assets/icons/elite.png',
    state: GameState.Locked,
    infoTitle: 'Title',
    infoContent:
      'Fusce sit amet nulla tellus. Morbi et mollis purus. Nullam blandit commodo nisi sed varius. Cras pretium blandit elementum. Sed malesuada malesuada turpis vel faucibus. Nam pretium est erat, egestas convallis mauris tincidunt eget. ',
    requiredLevel: 10,
  },
  {
    title: 'Trivia',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: 'Info',
    progress: 4,
    contentImage: '/assets/icons/elite.png',
    state: GameState.ComingSoon,
    infoTitle: 'Title',
    infoContent:
      'Fusce sit amet nulla tellus. Morbi et mollis purus. Nullam blandit commodo nisi sed varius. Cras pretium blandit elementum. Sed malesuada malesuada turpis vel faucibus. Nam pretium est erat, egestas convallis mauris tincidunt eget. ',
    releasedDate: '2022-01-01',
  },
];
export default games;
