import debounce from 'lodash.debounce';
import { useCallback, useMemo, useState } from 'react';

import type { ISearchInputProps } from './types';
import type { ChangeEvent, KeyboardEvent } from 'react';

const useSearchInput = ({
  initInputValue,
  onSearch,
}: Pick<ISearchInputProps, 'initInputValue' | 'onSearch'>) => {
  const [inputValue, setInputValue] = useState<string>(initInputValue ?? '');

  const handleDebounceSearch = useCallback(
    (newInputValue: string) => {
      onSearch(newInputValue);
    },
    [onSearch],
  );

  const debounceSearchFn = useMemo(
    () => debounce(handleDebounceSearch, 600),
    [handleDebounceSearch],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      debounceSearchFn(event.target.value);
    },
    [debounceSearchFn],
  );

  const handleEnterSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        debounceSearchFn.cancel();
        onSearch(inputValue);
      }
    },
    [inputValue, onSearch, debounceSearchFn],
  );

  return { inputValue, handleChange, handleEnterSearch };
};

export default useSearchInput;
