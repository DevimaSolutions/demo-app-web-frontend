import { Box, Button, Typography } from '@mui/material';

import { ArrowIcon, CheckMarkCircleIcon } from '@/components/icons';
import { combineSx } from '@/utils';

import styles from './styles';

import type { IOptionButtonProps } from './types';

const OptionButton = ({ icon, title, subtitle, selected, ...rest }: IOptionButtonProps) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={combineSx(styles.root(selected, !!subtitle), rest.sx)}
      {...rest}
    >
      <Box sx={styles.iconWrapper}>{icon}</Box>
      <Box sx={styles.content}>
        <Typography variant="h6">{title}</Typography>
        {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      </Box>
      {selected ? <CheckMarkCircleIcon /> : <ArrowIcon direction="left" />}
    </Button>
  );
};

export default OptionButton;
