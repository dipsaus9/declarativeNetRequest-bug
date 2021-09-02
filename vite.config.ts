import { resolve } from "path"

import reactRefresh from "@vitejs/plugin-react-refresh"
import { defineConfig } from "vite"
import { chromeExtension } from "vite-plugin-chrome-extension"

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: "src/manifest.json",
    },
  },
  plugins: [reactRefresh(), chromeExtension()],
})
