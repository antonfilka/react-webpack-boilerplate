import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";
import { BuildOptions } from "./types/config";
import { buildResolvers } from "./buildResolvers";
import { Configuration } from "webpack";
import "webpack-dev-server";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.src,
    output: {
      filename: "[name]-[contenthash].js",
      assetModuleFilename: "assets/[hash][ext][query]",
      path: paths.build,
      clean: true,
    },
    resolve: buildResolvers(),
    module: {
      rules: buildLoaders(),
    },
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
};
