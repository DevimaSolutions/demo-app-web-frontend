import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

import { envUtil } from '@/utils';

import type { FirebaseOptions } from 'firebase/app';

const env = envUtil.getEnv();

// TODO: IMPORTANT: THIS IS TEMPORARY TEST FIX, REMOVE IT LATER
const firebaseConfig: FirebaseOptions = {
  apiKey: env.firebase.apiKey || 'AIzaSyAK3JoxuMej6n9LURbHrttMMYBGVS_68Hg',
  authDomain: env.firebase.authDomain || 'shapergap.firebaseapp.com',
  databaseURL: env.firebase.databaseURL || 'https://shapergap-default-rtdb.firebaseio.com',
  projectId: env.firebase.projectId || 'shapergap',
  storageBucket: env.firebase.storageBucket || 'shapergap.appspot.com',
  messagingSenderId: env.firebase.messagingSenderId || '702163433441',
  appId: env.firebase.appId || '1:702163433441:web:5f7c74ac1466fd11e784a0',
  measurementId: env.firebase.measurementId || 'G-6ZW5VY840H',
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
