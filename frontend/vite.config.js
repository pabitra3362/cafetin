import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the backend server on port 3000
      '/api': {
        target: 'http://localhost:3000/api',  // Your backend server URL
        changeOrigin: true,  // Needed for virtual hosted sites
        secure: false,      // Set to true if you have SSL, false if not
        rewrite: (path) => path.replace(/^\/api/, ''),  // Optional: Remove '/api' prefix if necessary
      },
    },
  },
})
