import { ProviderOptions } from './provider-options';

export interface Provider {
  get providerName(): string;
  create<T>(options: ProviderOptions): Promise<T>;
  configure(config: ProviderOptions): ProviderOptions;
}
