import { Box, FormHelperText } from '@mui/material';

import SelectableChip from '@/components/SelectableChip';
import { combineSx } from '@/utils';

import styles from './styles';
import useSelectInput from './useSelectChipInput';

import type { ISelectChipInputProps } from './types';

function SelectChipInput<FormValues extends Record<string, unknown> = Record<string, unknown>>({
  sx,
  errorSx,
  options,
  ...props
}: ISelectChipInputProps<string[], FormValues>) {
  const { handleChipClick, hasError, errorText } = useSelectInput(props);

  return (
    <>
      <Box sx={combineSx(styles.root, sx)}>
        {options.map((el, index) => (
          <SelectableChip
            key={index}
            label={el.name}
            selected={props.field.value.includes(el.id)}
            onClick={handleChipClick(el.id)}
          />
        ))}
      </Box>
      {hasError ? <FormHelperText sx={errorSx}>{errorText}</FormHelperText> : <Box height={20} />}
    </>
  );
}

export default SelectChipInput;
