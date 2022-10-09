import { Provider } from './provider';
import { ProviderOptions } from './provider-options';

export abstract class AbstractProvider implements Provider {
  private _config: ProviderOptions;

  abstract get providerName(): string;
  abstract create<T>(options: ProviderOptions): Promise<T>;

  constructor(options: ProviderOptions = {}) {
    this._config = options;
  }

  configure(config: ProviderOptions = {}): ProviderOptions {
    this._config = { ...config, ...this._config };

    return this.options;
  }

  protected get options(): ProviderOptions {
    return { ...this._config };
  }
}
