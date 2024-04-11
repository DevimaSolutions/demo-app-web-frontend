import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';

import { AllTabPanel } from './components';
import styles from './styles';
import useFriendsSection from './useFriendsSection';

const FriendsSection = () => {
  const { tabValue, handleTabChange, hasFriendsInit, handleRedirect } = useFriendsSection();

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
            <Tabs value={tabValue} sx={styles.tabs} onChange={handleTabChange}>
              <Tab label="All" />
              <Tab label="Online X" disabled />
            </Tabs>
            <AllTabPanel value={tabValue} index={0} />
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
