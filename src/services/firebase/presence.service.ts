import { onDisconnect, onValue, ref, set } from 'firebase/database';
import { collection, doc, documentId, onSnapshot, query, setDoc, where } from 'firebase/firestore';

import {
  firestore,
  isOfflineForDatabase,
  isOfflineForFirestore,
  isOnlineForDatabase,
  isOnlineForFirestore,
  realtimeDatabase,
} from '@/modules';
import { chunkArray } from '@/utils';

import type { IUserOnline, IUserOnlineResponse } from '@/modules';
import type { Unsubscribe } from 'firebase/firestore';

// Firestore directories
const ROOT_DIR_PRESENCE = 'users_online';

// Create a reference to the special '.info/connected' path in
// Realtime Database. This path returns `true` when connected
// and `false` when disconnected.
const infoConnectedRef = ref(realtimeDatabase, '.info/connected');

/**
 * Tracks the online/offline status of a user.
 *
 * @param {string} userId - The ID of the user to track.
 * @returns {void} - This function does not return anything.
 */
const trackUserPresence = (userId: string) => {
  // Create a reference to this user's specific status node.
  // This is where we will store data about being online/offline.
  const userStatusDatabaseRef = ref(realtimeDatabase, `/status/${userId}`);
  const userOnlineFirestoreRef = doc(firestore, `/${ROOT_DIR_PRESENCE}/${userId}`);

  return onValue(infoConnectedRef, async (snapshot) => {
    // If we're not currently connected, set Firestore's user state to 'offline'.
    if (snapshot.val() == false) {
      // Instead of simply returning, we'll also set Firestore's state
      // to 'offline'. This ensures that our Firestore cache is aware
      // of the switch to 'offline.'
      await setDoc(userOnlineFirestoreRef, isOfflineForFirestore, {
        merge: true,
      });
      return;
    }

    // If we are currently connected, then use the 'onDisconnect()'
    // method to add a set which will only trigger once this
    // client has disconnected by closing the app,
    // losing internet, or any other means.
    onDisconnect(userStatusDatabaseRef)
      .set(isOfflineForDatabase)
      .then(async () => {
        // The promise returned from .onDisconnect().set() will
        // resolve as soon as the server acknowledges the onDisconnect()
        // request, NOT once we've actually disconnected:
        // https://firebase.google.com/docs/reference/js/firebase.database.OnDisconnect

        // We can now safely set ourselves as 'online' knowing that the
        // server will mark us as offline once we lose connection.
        await set(userStatusDatabaseRef, isOnlineForDatabase);

        // We'll also add Firestore set here for when we come online.
        await setDoc(userOnlineFirestoreRef, isOnlineForFirestore, {
          merge: true,
        });
      });
  });
};

/**
 * Fetches the online status of a list of users.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string[]} params.ids - An array of user IDs to fetch the online status for.
 * @param {Function} params.callback - A callback function that is called with the online status of the users.
 * @returns {Function} - A function that when called, unsubscribes from the online status updates.
 */
const fetchUsersOnline = ({
  ids,
  callback,
}: {
  ids: string[];
  callback: (val: IUserOnlineResponse) => void;
}) => {
  //firebase limit for batches - 10
  const batches = chunkArray(ids, 10);

  const unsubscribes = batches.map((batch) => {
    const q = query(collection(firestore, ROOT_DIR_PRESENCE), where(documentId(), 'in', batch));

    return onSnapshot(q, ({ docs }) => {
      const loadedUsersOnline = docs.reduce<IUserOnlineResponse>((acc, item) => {
        return { ...acc, [item.id]: item.data() as IUserOnline };
      }, {});

      callback(loadedUsersOnline);
    });
  });

  const unsubscribe: Unsubscribe = () =>
    unsubscribes.forEach((unsubscribeCallback) => {
      unsubscribeCallback();
    });

  return unsubscribe;
};

const setUserOffline = async (userId: string) => {
  const userStatusDatabaseRef = ref(realtimeDatabase, `/status/${userId}`);
  const userOnlineFirestoreRef = doc(firestore, `/${ROOT_DIR_PRESENCE}/${userId}`);

  await onDisconnect(userStatusDatabaseRef).cancel();
  await setDoc(userOnlineFirestoreRef, isOfflineForFirestore, {
    merge: true,
  });
  await set(userStatusDatabaseRef, isOfflineForDatabase);
};

const presenceService = { trackUserPresence, fetchUsersOnline, setUserOffline };

export default presenceService;
