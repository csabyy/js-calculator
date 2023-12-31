import { defineConfig } from 'vite'
import { resolve } from "path";
import dts from 'vite-plugin-dts'

export default defineConfig(() => ({
    build:{
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "my-lib",
            formats: ['es'],
            fileName: "index"
        },
        sourcemap: true
    },
    plugins: [dts()]
}))