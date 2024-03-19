import { Box, FormHelperText, InputAdornment, MenuItem, Select, Typography } from '@mui/material';

import { ArrowIcon, CheckMarkIcon } from '@/components/icons';
import { capitalize, combineSx } from '@/utils';

import styles from './styles';
import useSelectInput from './useSelectInput';

import type { ISelectInputProps } from './types';

function SelectInput<FormValues extends Record<string, unknown> = Record<string, unknown>>({
  field,
  form,
  options,
  ...props
}: ISelectInputProps<string, FormValues>) {
  const { hasError, errorText, adornmentColor } = useSelectInput({
    field,
    form,
    options,
    ...props,
  });

  return (
    <Box sx={styles.container}>
      <Select
        {...field}
        {...props}
        error={hasError}
        value={field.value}
        onChange={(e) => {
          form.setFieldValue(field.name, e.target.value);
        }}
        renderValue={(selected) =>
          !selected && props.placeholder ? (
            <Typography sx={styles.placeholder}>{props.placeholder}</Typography>
          ) : (
            capitalize(String(selected))
          )
        }
        startAdornment={
          <InputAdornment position="start" color={adornmentColor}>
            <Box color={adornmentColor} width={20} height={20}>
              {props.startAdornment}
            </Box>
          </InputAdornment>
        }
        IconComponent={(iconProps) => <ArrowIcon sx={styles.icon} {...iconProps} />}
        inputProps={{ 'aria-label': 'Without label' }}
        sx={combineSx(styles.root, props.sx)}
        displayEmpty
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option} sx={styles.option}>
            {option === field.value ? <CheckMarkIcon width={14} height={18} /> : null}
            {capitalize(option)}
          </MenuItem>
        ))}
      </Select>
      {hasError ? <FormHelperText>{errorText}</FormHelperText> : <Box height={20} />}
    </Box>
  );
}

export default SelectInput;
