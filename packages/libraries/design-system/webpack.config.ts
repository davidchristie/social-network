import * as CleanWebpackPlugin from "clean-webpack-plugin";
import { resolve } from "path";
import { Configuration } from "webpack";

const configuration: Configuration = {
  devtool: "source-map",
  entry: resolve(__dirname, "src", "index.ts"),
  mode: "production",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};

export default configuration;
