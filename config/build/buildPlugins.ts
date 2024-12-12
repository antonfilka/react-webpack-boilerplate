import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import { ProgressPlugin } from "webpack";

export const buildPlugins = (options: BuildOptions) => {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    new ProgressPlugin(),
  ];
};
