import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Time Converter',
        short_name: 'TimeConverter',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        description: 'A simple time converter',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
