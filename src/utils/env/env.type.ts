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

export interface IEnv {
  appName: string;
  frontendUrl: string;
  backendUrl: string;
  auth: IEnvAuthOptions;
}

export interface IEnv {
  appName: string;
  frontendUrl: string;
  backendUrl: string;
  auth: IEnvAuthOptions;
}
