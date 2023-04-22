// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/template.html",
  //   }),
  //   // new webpack.ProvidePlugin({
  //   //   $: "jquery",
  //   //   jQuery: "jquery",
  //   // }),
  // ],
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: require.resolve("./src/common.js"),
        loader: "expose-loader",
        options: {
          exposes: "changeTab changeTab",
        },
      },
    ],
  },
};
