const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src/base/nexWorld.js"),
  //entry: path.join(__dirname, 'src/sandbox.js'),
  output: {
    path: path.join(__dirname, "dist"),
    filename: `nexworld.min.js`,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  optimization: {
    minimize: true,

    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          keep_fnames: true,
          toplevel: false,
          keep_classnames: true,
        },
      }),
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    }),
  ],
  externals: {
    react: "React", // Case matters here
    "react-dom": "ReactDOM", // Case matters here
  },
};
