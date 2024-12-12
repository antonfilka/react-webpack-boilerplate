import { BuildOptions } from "./types/config";

export const buildDevServer = (options: BuildOptions) => {
  return {
    static: {
      directory: options.paths.public,
    },
    hot: true,
    compress: true,
    port: options.port,
  };
};
