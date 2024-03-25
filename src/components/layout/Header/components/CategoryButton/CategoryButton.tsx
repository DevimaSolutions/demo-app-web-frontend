import { Button } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';

import type { ICategoryButtonProps } from './types';

const CategoryButton = ({ selected = false, sx, ...rest }: ICategoryButtonProps) => {
  return <Button sx={combineSx(styles.root(selected), sx)} {...rest} />;
};

export default CategoryButton;
