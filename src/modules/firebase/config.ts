import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

import { envUtil } from '@/utils';

const env = envUtil.getEnv();

// Initialize Firebase
const firebaseApp = getApps().length ? getApp() : initializeApp(env.firebase);

// Initialize Firestore
const firestore = getFirestore(firebaseApp);

// Initialize Realtime Database
const realtimeDatabase = getDatabase(firebaseApp);

// Initialize Firebase Auth State
const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firestore, realtimeDatabase, firebaseAuth };
