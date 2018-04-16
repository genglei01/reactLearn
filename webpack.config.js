const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/public/index.html",
  filename: "index.html",
  inject: true
});

module.exports = {
  mode: "development",
  entry: __dirname + "/src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      { test: /\.(jpe?g|png|gif|ico)$/i, loader: "file?name=[name].[ext]" },

      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  output: {
    filename: "transform.js",
    path: __dirname + "/build"
  },
  plugins: [HtmlWebpackPluginConfig]
};
