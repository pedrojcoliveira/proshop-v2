import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'mfeAuth',
  exposes: {
    './Module': './src/remote-entry.ts',
    './LoginScreen': './src/screens/LoginScreen.tsx',
  },
  shared: (libraryName, defaultConfig) => {
    if (libraryName === 'react' || libraryName === 'react-dom') {
      return { 
        singleton: true,
        requiredVersion: false,
        strictVersion: false,
        eager: false,
      };
    }
    if (libraryName === 'react-router-dom') {
      return {
        singleton: true,
        requiredVersion: false,
        eager: false,
      };
    }
    return defaultConfig;
  },
};

export default config;
