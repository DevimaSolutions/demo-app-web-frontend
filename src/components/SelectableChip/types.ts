import type { ChipProps } from '@mui/material';

export interface IStyledChipProps extends Omit<ChipProps, 'clickable'> {
  selected?: boolean;
}

export type IUseFillingButtonProps = IStyledChipProps;
