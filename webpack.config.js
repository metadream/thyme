import path from "path";

export default {

    mode: "production",

    entry: "./src/Quick.js",
    output: {
        path: path.resolve("./dist"),
        filename: "quick.js"
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: "css-loader",
                options: { modules: 'icss' }
            }]
        }, {
            test: /\.svg$/,
            type: 'asset/source'
        }]
    }

}
