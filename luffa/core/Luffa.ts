import * as Fs from 'fs';

import * as Grpc from 'grpc';

import { LuffaRegistry } from './LuffaRegistry';
import { ConfigContainer } from '../config';

export class Luffa {
  private _server: Grpc.Server;

  private _rootDir: string;

  private _publicDir: string;

  private _configDir: string;

  private _logDir: string;

  private _env: string;

  private _dbDir: string;

  get rootDir(): string {
    return this._rootDir;
  }

  get publicDir(): string {
    return this._publicDir;
  }

  get configDir(): string {
    return this._configDir;
  }

  get logDir(): string {
    return this._logDir;
  }

  get env(): string {
    return this._env;
  }

  get dbDir(): string {
    return this._dbDir;
  }

  constructor() {
    this.loadSettings();

  }

  private loadSettings() {
    const settings = LuffaRegistry.settings;

    this._env = process.env.NODE_ENV || settings.env || 'development';
    this._rootDir = settings.rootDir;

    ['public', 'log', 'config', 'db'].map(item => {
      this[`_${item}Dir`] = settings[`${item}Dir`] || `${this._rootDir}/${item}`;

      if (!Fs.existsSync(this[`_${item}Dir`]) && this._env !== 'test') {
        Fs.mkdirSync(this[`_${item}Dir`]);
      }
    });
  }

  private loadConfig() {
    const configDir: string = this.configDir;

    const files = Fs.readdirSync(configDir);

    files.forEach((file: string) => {
      if (/\.json$/.test(file)) {
        ConfigContainer.registerConfig(Path.join(configDir, file));
      }
    });
  }

  private addTLS() {

  }

  public start() {

  }
}