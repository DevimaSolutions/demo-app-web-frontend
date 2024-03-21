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
