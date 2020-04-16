module.exports = {
  entry: "./src/app.ts",
  output: {
    path: __dirname + "/dist",
    filename: "app.bundle.js",
  },
  resolve: {
    extensions: ["*", "webpack.js", ".web.js", ".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
};
