export interface SettingOptions {
  /**
   * Required
   * The root folder of project
   */
  rootDir: string;

  /**
   * The public files folder of project
   * Default value: `${rootDir}/public`
   */
  publicDir?: string;

  /**
   * The configuration files folder of project
   * Default value: `${rootDir}/config`
   */
  configDir?: string;

  /**
   * The logger files folder of project
   * Default value: `${rootDir}/log`
   */
  logDir?: string;

  /**
   * The application environment, development, test, production, staging
   * `process.env.NODE_ENV` overwrite everything
   * Default value: 'development'
   */
  env?: string;

  /**
   * The database seed and migration files folder of project
   * Default value: `${rootDir}/db`
   */
  dbDir?: string;
}