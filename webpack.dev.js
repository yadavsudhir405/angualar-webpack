const AngularCompilerPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebPackMerge =  require("webpack-merge");
const commonConfig = require("webpack.common");

module.exports = WebPackMerge(commonConfig,{
  devtool: 'cheap-module-source-map',
  entry: {
    'polyfills': './src/polyfills.ts',
    'main': ['./src/main.ts', './src/style.css']
  },
  output: {
    path: '/',
    filename: "js/[name].bundle.js",
    chunkFilename: "js/[id].chunk.js"
  },
  module: {
    rules: [
      {
        test:/\.(eot|svg)$/,
        use:[
          {
            loader: 'file-loader',
            options:{
              name:"[name].[hash20].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|otf|ttf|wotf|woff2|cur|ani)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash20].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader'],
        include: "to-be-replaced"
      },
      {
        test: /\.ts$/,
        loaders: ['@ngtools/webpack']
      }
    ]
  },
  plugins: [
    new AngularCompilerPlugin({
      mainPath: "./src/main.ts",
      tsConfigPath: "./src/tsconfig.app.json",
      skipCodeGeneration: false
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: function (a, b) {
        var order = ["polyfill","vendor", "main"];
        return order.indexOf(a.names[0])-order.indexOf(b.names[0]);
      }
    })
  ]
});
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
