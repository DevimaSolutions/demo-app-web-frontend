import { Box, Typography } from '@mui/material';
import VerificationInput from 'react-verification-input';

import { combineSx } from '@/utils';

import styles from './styles';

import type { ICodeInputProps } from './types';

const classNames = {
  character: 'character',
  container: 'container',
  characterSelected: 'character--selected',
  characterFilled: 'character--filled',
};

const CodeInput = ({ sx, isError, ...rest }: ICodeInputProps) => {
  return (
    <Box sx={combineSx(styles.root(isError), sx)}>
      <VerificationInput
        classNames={classNames}
        length={4}
        placeholder={'-'}
        validChars={'/0-9/'}
        autoFocus
        {...rest}
      />
      {isError && (
        <Box sx={styles.errorBox}>
          <Typography sx={styles.errorText}>Invalid code</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CodeInput;
