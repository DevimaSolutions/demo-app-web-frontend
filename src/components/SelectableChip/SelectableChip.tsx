import { Chip } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';

import type { IStyledChipProps } from './types';

const SelectableChip = ({ selected = false, sx, ...prop }: IStyledChipProps) => {
  return <Chip sx={combineSx(styles.root(selected), sx)} clickable {...prop} />;
};

export default SelectableChip;
