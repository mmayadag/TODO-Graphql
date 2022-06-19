import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.ttf']

})
