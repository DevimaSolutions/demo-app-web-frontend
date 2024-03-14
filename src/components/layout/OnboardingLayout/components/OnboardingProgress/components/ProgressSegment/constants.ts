import { SegmentProgressStatus } from '@/constants';

export const segmentProgressStyles = {
  [SegmentProgressStatus.Done]: '2px',
  [SegmentProgressStatus.InProgress]: '85%',
  [SegmentProgressStatus.NotStarted]: 'calc(100% - 2px)',
};
