import path from "path";
import { Minifier } from './webpack.plugin.js';

export default {

    mode: "production",
    plugins: [new Minifier()],

    entry: "./src/Thyme.js",
    output: {
        path: path.resolve("./dist"),
        filename: "thyme.js"
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
