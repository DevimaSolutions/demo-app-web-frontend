import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

import { envUtil } from '@/utils';

import type { FirebaseOptions } from 'firebase/app';

const env = envUtil.getEnv();

const firebaseConfig: FirebaseOptions = {
  apiKey: env.firebase.apiKey,
  authDomain: env.firebase.authDomain,
  databaseURL: env.firebase.databaseURL,
  projectId: env.firebase.projectId,
  storageBucket: env.firebase.storageBucket,
  messagingSenderId: env.firebase.messagingSenderId,
  appId: env.firebase.appId,
  measurementId: env.firebase.measurementId,
};

// Initialize Firebase
const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(firebaseApp);

// Initialize Realtime Database
const realtimeDatabase = getDatabase(firebaseApp);

// Initialize Firebase Auth State
const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firestore, realtimeDatabase, firebaseAuth };
