import { Box, Link, Typography } from '@mui/material';

import { ArrowIcon, Avatar, InfoIcon } from '@/components';

import styles from './styles';

import type { IFriendsSectionProps } from './types';

const friendsArr = [
  {
    fullName: 'Theresa Webb',
    userImage: '',
    level: 19,
    isOnline: true,
  },
  {
    fullName: 'Theresa Webb',
    userImage: '',
    level: 21,
    isOnline: false,
  },
];

const FriendsSection = ({ friends = friendsArr }: IFriendsSectionProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleContainer}>
        <Box sx={styles.titleWrapper}>
          <Typography>Friends</Typography>
          {friends.length ? (
            <>
              <Typography sx={styles.greyColor}>|</Typography>
              <Typography sx={styles.onlineColor}>
                {friends.filter((friend) => friend.isOnline).length} online
              </Typography>
            </>
          ) : null}
        </Box>
        <InfoIcon />
        {/* TODO: add info functionality */}
      </Box>
      {friends.length ? (
        <Box sx={styles.contentContainer}>
          {friends.map((friend, index) => (
            <Box key={index} sx={styles.friend}>
              <Avatar src={friend.userImage} isOnline={friend.isOnline} />
              <Box sx={styles.friendTextWrapper}>
                <Typography>{friend.fullName}</Typography>
                <Typography variant="subtitle1">LVL {friend.level}</Typography>
              </Box>
              <ArrowIcon direction="left" sx={styles.arrow} />
            </Box>
          ))}
        </Box>
      ) : (
        <Link href={'/friends'}>Add friends</Link>
        // TODO: fix placeholder screen
      )}
    </Box>
  );
};

export default FriendsSection;
