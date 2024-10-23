import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"3-fullstack-basics.vercel.app"
    }
  },
  plugins: [react()],
})
