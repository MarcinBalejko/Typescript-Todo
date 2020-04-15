module.exports = {
  entry: "./src/app.ts",
  output: {
    path: __dirname + "/dist",
    filename: "app.bundle.js",
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
};
