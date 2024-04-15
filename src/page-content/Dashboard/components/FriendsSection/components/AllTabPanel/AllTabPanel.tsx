import { Box, CircularProgress, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Avatar, SearchInput, TabPanel } from '@/components';

import LevelHalfCircle from '../LevelHalfCircle';

import styles from './styles';
import useAllTabPanel from './useAllTabPanel';

import type ITabPanelProps from '../types';

const AllTabPanel = ({ value, index }: ITabPanelProps) => {
  const { friends, isFriendsLoading, loadMore, hasMore, checkOnline, handleSearch } =
    useAllTabPanel();
  return (
    <TabPanel value={value} index={index}>
      <Box sx={styles.root}>
        <SearchInput sx={styles.searchInput} onSearch={handleSearch} />
        <InfiniteScroll
          style={styles.friendsWrapper}
          dataLength={friends.length}
          scrollableTarget="infinite-scroll-parent"
          next={loadMore}
          hasMore={hasMore}
          loader={<></>}
        >
          {friends.length ? (
            friends.map((friend, friendsIndex) => (
              <Box key={friendsIndex} sx={styles.friend}>
                <Typography variant="subtitle1" sx={styles.number}>
                  {friendsIndex + 1}
                </Typography>
                <Avatar src={friend.avatar?.path} isOnline={checkOnline(friend.id)} />
                <Box sx={styles.friendTextWrapper}>
                  <Typography>{friend.name}</Typography>
                  <Typography variant="subtitle1" sx={styles.username}>
                    @{friend.username}
                  </Typography>
                </Box>
                {friend.level && friend.experience !== null ? (
                  <LevelHalfCircle level={friend.level} xpProgress={friend.experience} />
                ) : null}
              </Box>
            ))
          ) : (
            <Box sx={styles.noResults}>No results</Box>
          )}
        </InfiniteScroll>
        {isFriendsLoading && (
          <Box sx={styles.loadingWrapper}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </TabPanel>
  );
};

export default AllTabPanel;
