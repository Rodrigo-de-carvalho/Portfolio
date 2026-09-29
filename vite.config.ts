import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Endereço público do site, usado nas tags de prévia do index.html.
// Na Vercel vem de VERCEL_PROJECT_PRODUCTION_URL (definida automaticamente no build).
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
const siteUrl = productionHost ? `https://${productionHost}` : 'http://localhost:5173'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-url',
      transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    },
  ],
})
