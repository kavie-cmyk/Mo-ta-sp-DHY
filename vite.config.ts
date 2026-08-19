import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project-page repository on GitHub Pages => base must be the repo name path.
// Local dev server still works (base is only applied to built asset URLs).
export default defineConfig({
  base: '/Mo-ta-sp-DHY/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    sourcemap: false,
  },
})
