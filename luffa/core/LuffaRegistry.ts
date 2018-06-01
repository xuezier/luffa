import { SettingOptions } from './SettingOptions';
import { DependencyRegistry } from '../di';
import { Klass } from './Klass';

export class LuffaRegistry {
  public static settings: SettingOptions;

  public static registerWithOptions(target: Function, options: SettingOptions) {
    DependencyRegistry.registerComponent(<Klass>target);
    this.settings = options;
  }
}