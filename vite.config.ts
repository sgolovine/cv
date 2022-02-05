import preact from "@preact/preset-vite"
import path from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      "~": path.resolve(process.cwd(), "src"),
      "@data": path.resolve(process.cwd(), "data"),
    },
  },
})
