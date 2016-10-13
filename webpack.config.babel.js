import path from "path"

import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import { phenomicLoader } from "phenomic"
import phenomicLoaderPresetDefault from "phenomic/lib/loader-preset-default"
import phenomicLoaderPresetMarkDown from "phenomic/lib/loader-preset-markdown"
import phenomicLoaderPluginsInitRawBodyPropertyFromContent
  from "phenomic/lib/loader-plugin-init-rawBody-property-from-content"
import PhenomicLoaderFeedWebpackPlugin
  from "phenomic/lib/loader-feed-webpack-plugin"

import pkg from "./package.json"

// note that this webpack file is exporting a "makeConfig" function
// which is used for phenomic to build dynamic configuration based on your needs
// see the end of the file if you want to export a default config
// (eg: if you share your config for phenomic and other stuff)
export const makeConfig = (config = {}) => ({
  ...config.dev && {
    devtool: "#cheap-module-eval-source-map",
  },
  module: {
    noParse: /\.min\.js/,
    loaders: [
      {
        // phenomic requirement
        test: /\.md$/,
        loader: phenomicLoader,
        // config is in phenomic.contentLoader section below
        // so you can use functions (and not just JSON) due to a restriction
        // of webpack that serialize/deserialize loader `query` option.
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        exclude: [
          path.resolve(__dirname, "content"),
        ],
      },
      {
        test: /\.js$/,
        loaders: [
          "babel-loader",
          "eslint-loader?fix&emitWarning",
        ],
        include: [
          path.resolve(__dirname, "scripts"),
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "web_modules"),
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!postcss-loader",
        ),
      },
      {
        test: /content(\/|\\).*\.(html|json|txt|ico|jpe?g|png|gif)$/,
        loader: "file-loader" +
          "?name=[path][name].[ext]&context=" +
          path.join(config.cwd, config.source),
      },
      {
        test: /src(\/|\\).*\.(html|ico|jpe?g|png|gif)$/,
        loader: "file-loader?name=_/[path][name].[ext]&context=./src",
      },
      {
        test: /\.svg$/,
        loaders : [
          "raw-loader",
          "svgo-loader?useConfig=svgo",
        ],
      },
      {
        test: /\.yml$/,
        loaders : [
          "json-loader",
          "yaml-loader",
        ],
      },
    ],
  },

  phenomic: {
    context: path.join(__dirname, config.source),
    plugins: [
      ...phenomicLoaderPresetDefault,
      ...phenomicLoaderPresetMarkDown,
      phenomicLoaderPluginsInitRawBodyPropertyFromContent,
    ],
    defaultHead: {
      layout: "Post",
      comments: true,
    },
  },
  svgo: {
    plugins: [
      { removeTitle: true, removeDesc: true },
      { convertColors: { shorthex: false } },
      { convertPathData: false },
    ],
  },

  postcss: (webpack) => [
    require("stylelint")(),
    require("postcss-import")({
      addDependencyTo: webpack,
    }),
    require("postcss-at-rules-variables")(),
    require("postcss-each")(),
    require("postcss-for")(),
    require("postcss-conditionals")(),
    require("postcss-cssnext")({ browsers: "last 2 versions" }),
    require("postcss-responsive-type")(),
    require("postcss-browser-reporter")(),
    require("postcss-reporter")(),
  ],

  plugins: [
    new PhenomicLoaderFeedWebpackPlugin({
      // here you define generic metadata for your feed
      feedsOptions: {
        title: pkg.name,
        site_url: pkg.homepage,
      },
      feeds: {
        "feed.xml": {
          collectionOptions: {
            filter: { layout: "Post" },
            sort: "date",
            reverse: true,
            limit: 20,
          },
        },
      },
    }),
    new ExtractTextPlugin("[name].[hash].css", { disable: config.dev }),
    ...config.production && [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(
        { compress: { warnings: false } }
      ),
    ],
  ],

  output: {
    path: path.join(__dirname, config.destination),
    publicPath: config.baseUrl.pathname,
    filename: "[name].[hash].js",
  },

  ...config.static && {
    externals: [
      /fs-promise/,
    ],
  },

  // resolve: {
    // extensions: [ ".js", ".json", "" ],
    // root: [ path.join(__dirname, "node_modules") ],
  // },
  // resolveLoader: { root: [ path.join(__dirname, "node_modules") ] },
})

// you might want to export a default config for another usage ?
// export default makeConfig()
