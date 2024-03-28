import { Box, Button, CircularProgress, Typography } from '@mui/material';

import { ArrowIcon, Avatar } from '@/components';

import styles from './styles';
import useFriendsSection from './useFriendsSection';

const FriendsSection = () => {
  const { isFriendsLoading, friends, handleRedirect } = useFriendsSection();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleContainer}>
        <Box sx={styles.titleWrapper}>
          <Typography>Friends</Typography>
          {/*TODO: add online status*/}
        </Box>
      </Box>
      <Box sx={styles.contentContainer(!!friends.length)}>
        {isFriendsLoading ? (
          <Box sx={styles.loadingWrapper}>
            <CircularProgress />
          </Box>
        ) : friends.length ? (
          <>
            <Box sx={styles.friendsWrapper}>
              {
                //TODO: make friends clickable
                friends.map((friend, index) => (
                  <Box key={index} sx={styles.friend}>
                    <Avatar
                      src={friend.avatar}
                      //TODO: add online status
                    />
                    <Box sx={styles.friendTextWrapper}>
                      <Typography>{friend.name.full}</Typography>
                      {/*TODO: add user level*/}
                      <Typography variant="subtitle1">LVL 0</Typography>
                    </Box>
                    <ArrowIcon direction="left" sx={styles.arrow} />
                  </Box>
                ))
              }
            </Box>
          </>
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
