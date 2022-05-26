import { defineConfig } from 'vite'
import { createHtmlPlugin as Html } from 'vite-plugin-html'

export default defineConfig({
  base: process.env.GH_PAGES === 'true' ? '/lazy-hackathon/' : '/',
  plugins: [
    Html({ minify: true }),
  ],
})
