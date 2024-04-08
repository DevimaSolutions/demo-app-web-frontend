import { Box, CircularProgress, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Avatar, TabPanel } from '@/components';

import LevelHalfCircle from '../LevelHalfCircle';

import styles from './styles';
import useAllTabPanel from './useAllTabPanel';

import type ITabPanelProps from '../types';

const AllTabPanel = ({ value, index }: ITabPanelProps) => {
  const { friends, isFriendsLoading, loadMore, hasMore, checkOnline } = useAllTabPanel();
  return (
    <TabPanel value={value} index={index}>
      <InfiniteScroll
        style={styles.friendsWrapper}
        dataLength={friends.length}
        scrollableTarget="infinite-scroll-parent"
        next={loadMore}
        hasMore={hasMore}
        loader={<></>}
      >
        {
          //TODO: add click action
          friends.length ? (
            friends.map((friend, friendsIndex) => (
              <Box key={friendsIndex} sx={styles.friend}>
                <Typography variant="subtitle1" sx={styles.number}>
                  {friendsIndex + 1}
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
    </TabPanel>
  );
};

export default AllTabPanel;
