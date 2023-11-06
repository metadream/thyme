import path from 'path';
import { fileURLToPath } from 'url';
const filename = fileURLToPath(
    import.meta.url);

export default {
    entry: "./src/index.js",
    output: {
        path: '/home/xehu/Codebase/quick-components/dist',
        filename: "bundle.js"
    },
    mode: 'production',
    module: {
        rules: [
            // 新增的loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}