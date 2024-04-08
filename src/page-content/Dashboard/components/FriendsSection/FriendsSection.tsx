import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';

import { AllTabPanel } from './components';
import styles from './styles';
import useFriendsSection from './useFriendsSection';

const FriendsSection = () => {
  const { hasFriendsInit, handleRedirect } = useFriendsSection();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleContainer}>
        <Typography variant="h3">Friends</Typography>
        {hasFriendsInit && (
          <Button sx={styles.addFriendButton} onClick={handleRedirect('/friends')}>
            Add friend
          </Button>
        )}
      </Box>
      <Box sx={styles.contentContainer(hasFriendsInit)}>
        {hasFriendsInit ? (
          <Box>
            <Box sx={{ marginLeft: 2 }}>
              <Tabs value={value} onChange={handleChange} sx={{}}>
                <Tab label="All" />
                <Tab label="Online X" />
                <Tab label="Offline" />
              </Tabs>
            </Box>
            <AllTabPanel value={value} index={0}>
              Item One
            </AllTabPanel>
          </Box>
        ) : (
          <>
            <Typography variant="subtitle2">Wow, it’s really cold here...</Typography>
            <Button sx={styles.addFriendButton} onClick={handleRedirect('/friends')}>
              Add friend
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default FriendsSection;
