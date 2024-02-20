import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
    // root: "/",
    build: {
        outDir: path.join(__dirname, "dist"),
        lib: {
            entry: path.resolve(__dirname, "index.scss"),
            name: "@guebbit/css-ui",
            fileName: "css-ui",
        },
    },
    server: {
        port: 8080,
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [],
});