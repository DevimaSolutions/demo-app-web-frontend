const styles = {
  root: {
    fill: 'none',
    width: 'auto',
    height: 'auto',
  },
  up: {
    transform: 'rotate(0deg)',
  },
  right: {
    transform: 'rotate(90deg)',
  },
  down: {
    transform: 'rotate(180deg)',
  },
  left: {
    transform: 'rotate(270deg)',
  },
} as const;
export default styles;
