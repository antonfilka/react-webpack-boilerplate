import path from "path";
import webpack from "webpack";
import { BuildEnv, BuildMode } from "config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
  const PORT = env.port || 3000;
  const MODE: BuildMode = env.mode || "development";

  const paths = {
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "dist"),
    public: path.resolve(__dirname, "public"),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths,
    port: PORT,
    isDev: MODE === "development",
  });

  return config;
};
