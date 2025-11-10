import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// Plugin pour copier index.html vers 404.html pour GitHub Pages SPA routing
const ghPages404 = () => ({
  name: 'gh-pages-404',
  closeBundle() {
    const outDir = 'dist'
    const indexPath = join(outDir, 'index.html')
    const notFoundPath = join(outDir, '404.html')
    try {
      copyFileSync(indexPath, notFoundPath)
      console.log('✓ Copied index.html to 404.html for GitHub Pages')
    } catch (err) {
      console.error('Failed to copy index.html to 404.html:', err)
    }
  }
})

export default defineConfig({
  base: '/secretsanta/',
  plugins: [react(), ghPages404()],
}) 