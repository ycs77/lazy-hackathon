import { defineConfig } from 'vite'
import { createHtmlPlugin as Html } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    Html({ minify: true }),
  ],
})
