var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular')
        ]
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
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ],
    postLoaders: [
      {
        test: /\.(js|ts)$/,
        include: helpers.root('src'),
        exclude: [/(node_modules|resources\/js\/vendor)/, /\.(e2e|spec)\.ts$/],
        loader: 'istanbul-instrumenter-loader'
      }
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
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    )
  ]
}