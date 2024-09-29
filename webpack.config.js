const path = require("path");
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: "./src/index.ts"
    },
    watch: true,
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "jsonhtml-bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, "build"),
        compress: true,
        port: 8080,
        hot: true,
        watchFiles: ["src/*"]
    }
}