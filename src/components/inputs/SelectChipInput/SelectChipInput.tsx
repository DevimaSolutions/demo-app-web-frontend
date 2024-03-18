import { Box, FormHelperText } from '@mui/material';

import SelectableChip from '@/components/SelectableChip';
import { combineSx } from '@/utils';

import styles from './styles';
import useSelectInput from './useSelectChipInput';

import type { ISelectChipInputProps } from './types';

function SelectChipInput<FormValues extends Record<string, unknown> = Record<string, unknown>>({
  sx,
  errorSx,
  ...props
}: ISelectChipInputProps<string[], FormValues>) {
  const { renderOptions, handleChipClick, hasError, errorText } = useSelectInput(props);

  return (
    <>
      <Box sx={combineSx(styles.root, sx)}>
        {renderOptions.map((el, index) => (
          <SelectableChip
            key={index}
            label={el.name}
            selected={el.selected}
            onClick={handleChipClick(el.name)}
          />
        ))}
      </Box>
      {hasError ? <FormHelperText sx={errorSx}>{errorText}</FormHelperText> : <Box height={20} />}
    </>
  );
}

export default SelectChipInput;
