import { Box, IconButton, InputAdornment, TextField } from '@mui/material';

import { EditPencilIcon, TabPanel } from '@/components';

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
        <TextField
          label="Name"
          defaultValue={profile.name.full}
          InputProps={{
            readOnly: true,
            endAdornment: EditEndAdornment,
          }}
          variant="standard"
        />
        <TextField
          label="Username"
          defaultValue={`@${profile.nickname}`}
          InputProps={{
            readOnly: true,
            endAdornment: EditEndAdornment,
          }}
          variant="standard"
        />
        <TextField
          label="Email"
          defaultValue={profile.email}
          InputProps={{
            readOnly: true,
          }}
          disabled
          variant="standard"
        />
        <TextField
          label="Password"
          defaultValue={'password'}
          InputProps={{
            readOnly: true,
            endAdornment: EditEndAdornment,
          }}
          type="password"
          variant="standard"
        />
      </Box>
    </TabPanel>
  );
};

export default AccountDetails;
