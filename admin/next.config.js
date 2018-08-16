const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// This feels like a hack, yet I like it more than setting NODE_PATH=. before every next cli command
process.env.NODE_PATH = '.';

module.exports = withTypescript({
  webpack(config, options) {
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            // limit: 2,
            fallback: 'file-loader',
            publicPath: `/_next/static/images/`,
            outputPath: `${options.isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
});
