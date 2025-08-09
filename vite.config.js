import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
    // root: "/",
    build: {
        outDir: path.join(__dirname, "dist"),
        lib: {
            entry: path.resolve(__dirname, "index.scss"), // TODO library.scss (import the various components)
            name: "@guebbit/css-ui",
            fileName: "css-ui",
        },
    },
    server: {
        port: 8080,
    },
    resolve: {},
    plugins: [],
});