import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,

pwaAssets: {
  disabled: false,
  config: true,
},

manifest: {
  name: 'scouting-app-test',
  short_name: 'scouting-app-test',
  description: 'a scouting app',
  theme_color: '#ffffff',
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  icons: [
    {
      src: "icons/manifest-icon-192.maskable.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any"
    },
    {
      src: "icons/manifest-icon-192.maskable.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable"
    },
    {
      src: "icons/manifest-icon-512.maskable.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any"
    },
    {
      src: "icons/manifest-icon-512.maskable.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable"
    }
  ],
},
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})