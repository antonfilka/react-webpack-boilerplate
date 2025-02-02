export type BuildMode = "production" | "development";

export interface BuildPaths {
  src: string;
  build: string;
  html: string;
  public: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
  isDev: boolean;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
