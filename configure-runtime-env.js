const fs = require('node:fs');
const path = require('node:path');

/**
 * Gets a list of environment variables that start with `NEXT_PUBLIC_`.
 */
function getPublicEnv() {
  const publicEnv = Object.keys(process.env)
    .filter((key) => /^NEXT_PUBLIC_/i.test(key))
    .reduce(
      (env, key) => ({
        ...env,
        [key]: process.env[key],
      }),
      {},
    );
  return publicEnv;
}

function getBrowserEnvScript(env) {
  return `window.__ENV = ${JSON.stringify(env)};`;
}

/**
 * Writes the environment variables to the public __ENV.js file and make them
 * accessible under `window.__ENV`.
 */
function writeBrowserEnv(env, subdirectory = '') {
  const base = fs.realpathSync(process.cwd());
  const file = `${base}/public/${subdirectory}__ENV.js`;
  const content = getBrowserEnvScript(env);
  const dirname = path.dirname(file);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  fs.writeFileSync(file, content);
}

/**
 * Reads all environment variables that start with `NEXT_PUBLIC_` and writes
 * them to the public `__ENV.js` file. This makes them accessible under the
 * `window.__ENV` object.
 *
 * Options:
 * ```ts
 * type ConfigureRuntimeEnvOptions = {
 *  // The subdirectory of `/public` where the `__ENV.js` file should be written to. eg. `subdirectory/`
 *  subdirectory?: string;
 * };
 * ```
 */
function configureRuntimeEnv(options) {
  const publicEnv = getPublicEnv();
  writeBrowserEnv(publicEnv, options?.subdirectory);
}

configureRuntimeEnv();
