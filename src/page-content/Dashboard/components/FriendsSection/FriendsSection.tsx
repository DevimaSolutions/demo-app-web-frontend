import { Box, CircularProgress, Link, Typography } from '@mui/material';

import { ArrowIcon, Avatar, InfoIcon } from '@/components';

import styles from './styles';

import type { IFriendsSectionProps } from './types';

const FriendsSection = ({ friends, isLoading = false }: IFriendsSectionProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleContainer}>
        <Box sx={styles.titleWrapper}>
          <Typography>Friends</Typography>
          {friends.length && !isLoading ? (
            <>
              <Typography sx={styles.greyColor}>|</Typography>
              <Typography sx={styles.onlineColor}>
                {/* {friends.filter((friend) => friend.isOnline).length} online */}0 online
              </Typography>
            </>
          ) : null}
        </Box>
        <InfoIcon />
        {/* TODO: add info functionality */}
      </Box>
      {friends.length ? (
        <Box sx={styles.contentContainer}>
          {isLoading ? (
            <CircularProgress sx={styles.extraContent} />
          ) : (
            //TODO: make friends clickable
            friends.map((friend, index) => (
              <Box key={index} sx={styles.friend}>
                <Avatar
                  src={friend.avatar}
                  //TODO: add online
                />
                <Box sx={styles.friendTextWrapper}>
                  <Typography>{friend.name.full}</Typography>
                  {/*TODO: add user level*/}
                  <Typography variant="subtitle1">LVL 0</Typography>
                </Box>
                <ArrowIcon direction="left" sx={styles.arrow} />
              </Box>
            ))
          )}
        </Box>
      ) : (
        <Link href={'/friends'} sx={styles.extraContent}>
          Add friends
        </Link>
        // TODO: add placeholder screen
      )}
    </Box>
  );
};

export default FriendsSection;
