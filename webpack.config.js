import path from "path";

export default {

    entry: "./src/Quick.js",
    output: {
        path: path.resolve("./dist"),
        filename: "quick.js"
    },

    mode: "production",
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: "css-loader",
                options: { modules: 'icss' }
            }]
        }]
    }

}