export enum EnvMode {
  DEV_ENV = 'development',
  PROD_ENV = 'production',
  TEST_ENV = 'test',
}

export interface IEnvAuthOptions {
  googleClientId: string;
  linkedinState: string;
  linkedinScope: string;
  linkedinRedirect: string;
  linkedinClientId: string;
}

export interface IEnvLinksOptions {
  appStoreLink: string;
  googlePLayLink: string;
  iosAppBundleLink: string;
}

export interface IFirestoreConfigs {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface IEnv {
  appName: string;
  frontendUrl: string;
  backendUrl: string;
  auth: IEnvAuthOptions;
  links: IEnvLinksOptions;
  firebase: IFirestoreConfigs;
}
