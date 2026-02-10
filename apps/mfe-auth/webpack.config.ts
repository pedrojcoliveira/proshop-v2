import { composePlugins, withNx } from "@nx/webpack";
import { withReact } from "@nx/react";
import { container } from "webpack";

const ModuleFederationPlugin = container.ModuleFederationPlugin;

export default composePlugins(
  withNx(),
  withReact(),
  (config) => {
    if (config.experiments) {
      config.experiments.outputModule = false;
    }

    config.output = {
      ...config.output,
      publicPath: "http://localhost:4201/",
      uniqueName: "mfeAuth",
      module: false,
    };

    config.optimization = {
      ...config.optimization,
      runtimeChunk: false,
    };

    config.plugins = (config.plugins || []).filter((p) => {
      const name = p?.constructor?.name;
      return name !== "EnabledLibraryPlugin";
    });

    config.plugins.push(
      new ModuleFederationPlugin({
        name: "mfeAuth",
        filename: "remoteEntry.js",
        library: { type: "var", name: "mfeAuth" },
        exposes: {
          "./LoginScreen": "./src/screens/LoginScreen.tsx",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
            strictVersion: false,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: false,
            strictVersion: false,
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    return config;
  }
);
