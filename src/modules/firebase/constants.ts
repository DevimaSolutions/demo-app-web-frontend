import { serverTimestamp as realtimeTimestamp } from 'firebase/database';
import { serverTimestamp as firestoreTimestamp } from 'firebase/firestore';

import type { IPresenceData } from './types';

export const isOfflineForDatabase: IPresenceData = {
  state: 'offline',
  lastChanged: realtimeTimestamp(),
};

export const isOnlineForDatabase: IPresenceData = {
  state: 'online',
  lastChanged: realtimeTimestamp(),
};

export const isOfflineForFirestore: IPresenceData = {
  state: 'offline',
  lastChanged: firestoreTimestamp(),
};

export const isOnlineForFirestore: IPresenceData = {
  state: 'online',
  lastChanged: firestoreTimestamp(),
};
