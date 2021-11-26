const path = require("path");

module.exports = {
  target: "node",
  context: path.resolve(__dirname, "./"),
  entry: {
    main: "./server.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
