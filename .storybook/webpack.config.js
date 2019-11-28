const path = require("path");
const webpack = require("webpack");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  config.plugins.push(
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fr/)
  );

  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ],
      include: path.resolve(__dirname, "../../")
    },
    {
      test: /\.stories\.js?$/,
      loaders: [require.resolve("@storybook/addon-storysource/loader")],
      enforce: "pre"
    }
  );

  // Return the altered config
  return config;
};
