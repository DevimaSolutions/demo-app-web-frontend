import type { FieldValue, Timestamp } from 'firebase/firestore';

export type UserPresence = 'offline' | 'online';

export interface IPresenceData {
  state: UserPresence;
  lastChanged: object | FieldValue;
}

export interface IUserOnline {
  state: UserPresence;
  lastChanged: Timestamp;
}

export type IUserOnlineResponse = Record<string, IUserOnline | null>;
