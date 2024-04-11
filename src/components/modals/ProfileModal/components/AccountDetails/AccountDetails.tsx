import { Box, IconButton, InputAdornment, TextField } from '@mui/material';

import { EditPencilIcon, TabPanel } from '@/components';

import accountFields from './constants';
import styles from './styles';
import useAccountDetails from './useAccountDetails';

import type { IAccountDetailProps } from './types';

const AccountDetails = ({ value, index, onChangePassword }: IAccountDetailProps) => {
  const { profile } = useAccountDetails();
  const EditEndAdornment = (handleClick?: () => void) => (
    <InputAdornment position="end" sx={styles.editEndAdornment}>
      <IconButton onClick={handleClick}>
        <EditPencilIcon />
      </IconButton>
    </InputAdornment>
  );
  return (
    <TabPanel value={value} index={index}>
      <Box sx={styles.inputGrid}>
        {accountFields(profile, onChangePassword).map((field, fieldIndex) => (
          <TextField
            key={fieldIndex}
            label={field.label}
            defaultValue={field.defaultValue}
            InputProps={{
              readOnly: true,
              ...(field.isEditable && {
                endAdornment: EditEndAdornment(field.onClick),
              }),
            }}
            type={field.type}
            disabled={field.disabled}
            variant="standard"
          />
        ))}
      </Box>
    </TabPanel>
  );
};

export default AccountDetails;
