import { Box, IconButton, InputAdornment, TextField } from '@mui/material';

import { EditPencilIcon, TabPanel } from '@/components';

import accountFields from './constants';
import styles from './styles';
import useAccountDetails from './useAccountDetails';

import type ITabPanelProps from '../types';

const AccountDetails = ({ value, index }: ITabPanelProps) => {
  const { profile } = useAccountDetails();
  const EditEndAdornment = (
    <InputAdornment position="end" sx={styles.editEndAdornment}>
      <IconButton>
        <EditPencilIcon />
      </IconButton>
    </InputAdornment>
  );
  return (
    <TabPanel value={value} index={index}>
      <Box sx={styles.inputGrid}>
        {accountFields(profile).map((field, fieldIndex) => (
          <TextField
            key={fieldIndex}
            label={field.label}
            defaultValue={field.defaultValue}
            InputProps={{
              readOnly: true,
              ...(field.isEditable && { endAdornment: EditEndAdornment }),
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
