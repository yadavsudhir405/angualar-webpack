const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const entry = {
    app: "./src/index.ts"
};
const  output = {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')

};
const rules = [
    {
        test : /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
];
const plugins = [
    new HtmlWebpackPlugin({
        minify: false,
        template: path.resolve(__dirname, "src/index.html"),
        inject: 'body',
        hash: false
    })
];
const config = {
    "entry": entry,
    "output": output,
    "module":{
        rules: rules
    },
    "plugins": plugins,
    "resolve": {
        extensions: ['.ts','.js']
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    }
};

module.exports = config;
