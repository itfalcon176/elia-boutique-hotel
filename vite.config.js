import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Direct Play Store URLs. Copied so a static host can serve them without a link from the site.
const LEGAL_ROUTES = ['privacy-policy', 'term-and-condition']

function legalRouteEntries() {
  return {
    name: 'legal-route-entries',
    apply: 'build',
    closeBundle() {
      const dist = resolve('dist')
      const index = resolve(dist, 'index.html')
      for (const route of LEGAL_ROUTES) {
        const dir = resolve(dist, route)
        mkdirSync(dir, { recursive: true })
        copyFileSync(index, resolve(dir, 'index.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legalRouteEntries(),
  ],
})
