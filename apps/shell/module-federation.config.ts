import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: ['mfeAuth@http://localhost:4201/remoteEntry.js'],
};

export default config;
