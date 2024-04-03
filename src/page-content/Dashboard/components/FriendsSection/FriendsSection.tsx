import { Box, Button, CircularProgress, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Avatar } from '@/components';

import { LevelHalfCircle } from './components';
import styles from './styles';
import useFriendsSection from './useFriendsSection';

const FriendsSection = () => {
  const {
    hasFriendsInit,
    friends,
    isFriendsLoading,
    handleRedirect,
    loadMore,
    hasMore,
    checkOnline,
  } = useFriendsSection();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleContainer}>
        <Typography variant="h3">Friends</Typography>
        <Button sx={styles.addFriendButton} onClick={handleRedirect('/friends')}>
          Add friend
        </Button>
      </Box>
      {/*TODO: add tabs*/}
      <Box sx={styles.contentContainer(!!hasFriendsInit)}>
        {hasFriendsInit ? (
          <>
            <InfiniteScroll
              style={styles.friendsWrapper}
              dataLength={friends.length}
              scrollableTarget="infinite-scroll-parent"
              next={loadMore}
              hasMore={hasMore}
              loader={<></>}
            >
              {
                //TODO: navigate to game session or friend profile
                friends.length ? (
                  friends.map((friend, index) => (
                    <Box key={index} sx={styles.friend}>
                      <Typography variant="subtitle1" sx={styles.number}>
                        {index + 1}
                      </Typography>
                      <Avatar src={friend.avatar?.path} isOnline={checkOnline(friend.id)} />
                      <Box sx={styles.friendTextWrapper}>
                        <Typography>{friend.name.full}</Typography>
                        <Typography variant="subtitle1" sx={styles.nickname}>
                          @{friend.nickname}
                        </Typography>
                      </Box>
                      <LevelHalfCircle level={friend.level} xpProgress={friend.experience} />
                    </Box>
                  ))
                ) : (
                  <>No results</>
                )
              }
            </InfiniteScroll>
            {isFriendsLoading && (
              <Box sx={styles.loadingWrapper}>
                <CircularProgress />
              </Box>
            )}
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
