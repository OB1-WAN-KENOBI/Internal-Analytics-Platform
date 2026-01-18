import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use /Internal-Analytics-Platform/ for production (GitHub Pages), / for development
  const basePath = mode === 'production' ? '/Internal-Analytics-Platform/' : '/'
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5174,
    },
    base: basePath,
  }
})
