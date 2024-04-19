import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite"

import path from "path";
let projectPath = path.resolve(__dirname, "./");
let srcPath = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": projectPath,
      "@": srcPath
    }
  },
  plugins: [
    vue(),
    Unocss()
  ],
})
