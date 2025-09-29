import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    createVuePlugin({
      vueTemplateOptions: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      },
      jsx: false
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 8080,
    host: true,
    hmr: {
      overlay: false
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})