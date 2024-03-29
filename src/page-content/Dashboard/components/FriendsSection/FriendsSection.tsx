import { Box, Button, CircularProgress, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import { ArrowIcon, Avatar, SearchInput } from '@/components';

import styles from './styles';
import useFriendsSection from './useFriendsSection';

const FriendsSection = () => {
  const {
    hasFriendsInit,
    friends,
    isFriendsLoading,
    handleRedirect,
    handleSearch,
    loadMore,
    hasMore,
  } = useFriendsSection();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleContainer}>
        <Box sx={styles.titleWrapper}>
          <Typography>Friends</Typography>
          {/*TODO: add online status*/}
        </Box>
      </Box>
      <Box sx={styles.contentContainer(!!hasFriendsInit)}>
        {hasFriendsInit ? (
          <>
            <SearchInput onSearch={handleSearch} />
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
