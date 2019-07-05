const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index.js",
      publicPath: "/"
    },
    devtool: "eval-source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
    ]
  };
};
