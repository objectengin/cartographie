var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: "file-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ])
  ],

  tslint: {
    "configuration" : {
      "extends": "tslint:recommended",
      "rulesDirectory": [
        "node_modules/codelyzer"
      ],
      "rules":{
        "directive-selector-name": [true, "camelCase"],
        "component-selector-name": [true, "kebab-case"],
        "directive-selector-type": [true, "attribute"],
        "component-selector-type": [true, "element"],
        "directive-selector-prefix": [true, "sg"],
        "component-selector-prefix": [true, "sg"],
        "use-input-property-decorator": true,
        "use-output-property-decorator": true,
        "use-host-property-decorator": true,
        "no-attribute-parameter-decorator": true,
        "no-input-rename": true,
        "no-output-rename": true,
        "no-forward-ref": true,
        "use-life-cycle-interface": true,
        "use-pipe-transform-interface": true,
        "pipe-naming": [true, "camelCase", "sg"],
        "component-class-suffix": true,
        "directive-class-suffix": true,
        "import-destructuring-spacing": true,
        "templates-use-public": true,
        "no-access-missing-member": true,
        "invoke-injectable": true
      }
    },
    emitErrors: true,
    failOnHint: true,
    fileOutput: { 
      ext: "xml", 
      clean: true, 
      header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",
      footer: "</checkstyle>"
    }
  }
};
