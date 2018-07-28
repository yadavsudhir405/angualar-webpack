const Webpack = require('webpack');
const AutoPrefixer = require('autoprefixer');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const rxPaths = require('rxjs/_esm5/path-mapping');

if(process.env.ENV != null){
  environment = process.env.ENV;
}else {
  environment = "DEV";
}

module.exports = function makeWebPackConfig() {
  var config = {};
  config.resolve = {
    extensions: ['.ts', '.js'],
  };
  config.module = {
    rules: [
      {
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /\.css$/,
        use:['to-string-loader', 'css-loader'],
        exclude: [root('src','styles')]
      },
      {
        test:/\.html$/,
        use: "raw-loader",
        exclude: root('src','assets')
      }
    ]
  };
  config.plugins = [
    new CopyWebpackPlugin([{from:'./src/assets', to: 'assets'}],{
      'ignore':['.gitkeep'],
      'debug': 'warning'
    })
  ];
  return config;
};

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
