import { env as envRuntime } from 'next-runtime-env';

import { EnvMode } from './env.type';

import type { IEnv } from './env.type';

const processEnvMode = process.env.NODE_ENV?.toLowerCase() as EnvMode;
const envMode = Object.values(EnvMode).includes(processEnvMode) ? processEnvMode : EnvMode.DEV_ENV;

const isEnv = (mode: EnvMode) => envMode.toLowerCase() === mode;

export const getEnvMode = () => envMode;

export const isDevEnv = () => isEnv(EnvMode.DEV_ENV);

export const isProdEnv = () => isEnv(EnvMode.PROD_ENV);

export const isTestEnv = () => isEnv(EnvMode.TEST_ENV);

const mapEnv = () => {
  const parsed: IEnv = {
    appName: envRuntime('NEXT_PUBLIC_APP_NAME') || '',
    frontendUrl: envRuntime('NEXT_PUBLIC_FRONTEND_URL') || '',
    backendUrl: envRuntime('NEXT_PUBLIC_BACKEND_URL') || '',
    auth: {
      googleClientId: envRuntime('NEXT_PUBLIC_GOOGLE_CLIENT_ID') || '',
      linkedinState: envRuntime('NEXT_PUBLIC_LINKEDIN_STATE') || '',
      linkedinScope: envRuntime('NEXT_PUBLIC_LINKEDIN_SCOPE') || '',
      linkedinRedirect: envRuntime('NEXT_PUBLIC_LINKEDIN_REDIRECT') || '',
      linkedinClientId: envRuntime('NEXT_PUBLIC_LINKEDIN_CLIENT_ID') || '',
    },
    links: {
      appStoreLink: envRuntime('NEXT_PUBLIC_APP_STORE_LINK') || '',
      googlePLayLink: envRuntime('NEXT_PUBLIC_GOOGLE_PLAY_LINK') || '',
      iosAppBundleLink: envRuntime('NEXT_PUBLIC_IOS_CFBUNDLE_NAME') || '',
    },
    firebase: {
      apiKey: envRuntime('NEXT_PUBLIC_FIREBASE_API_KEY') || '',
      authDomain: envRuntime('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN') || '',
      databaseURL: envRuntime('NEXT_PUBLIC_FIREBASE_DATABASE_URL') || '',
      projectId: envRuntime('NEXT_PUBLIC_FIREBASE_PROJECT_ID') || '',
      storageBucket: envRuntime('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET') || '',
      messagingSenderId: envRuntime('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID') || '',
      appId: envRuntime('NEXT_PUBLIC_FIREBASE_APP_ID') || '',
      measurementId: envRuntime('NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID') || '',
    },
  };

  return Object.freeze(parsed);
};

let env: IEnv;
export const getEnv = (): Readonly<IEnv> => {
  if (!env) {
    env = mapEnv();
  }
  return env;
};
