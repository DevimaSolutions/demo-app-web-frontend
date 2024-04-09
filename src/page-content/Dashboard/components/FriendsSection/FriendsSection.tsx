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
                      <Avatar src={friend.avatar?.path} isOnline={checkOnline(friend.id)} />
                      <Box sx={styles.friendTextWrapper}>
                        <Typography>{friend.name}</Typography>
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
            {isLoading && (
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
