import { InputAdornment, TextField } from '@mui/material';

import { SearchIcon } from '@/components/icons';
import { combineSx } from '@/utils';

import styles from './styles';
import useSearchInput from './useSearchInput';

import type { ISearchInputProps } from './types';

const SearchInput = ({
  value,
  onSearch,
  sx,
  placeholder = 'Email or nick name...',
  ...props
}: ISearchInputProps) => {
  const { inputValue, handleChange, handleEnterSearch } = useSearchInput({
    value,
    onSearch,
  });
  return (
    <TextField
      {...props}
      variant="outlined"
      value={inputValue}
      placeholder={placeholder}
      autoComplete="off"
      onChange={handleChange}
      onKeyDown={handleEnterSearch}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" variant="standard" sx={styles.endAdornment}>
            <SearchIcon />
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      sx={combineSx(styles.searchInput, sx)}
    />
  );
};

export default SearchInput;
