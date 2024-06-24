import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
proxy:{
  '/api':{
    target: 'http://127.0.0.1:3000',
    changeOrigin: true, // Ensure this is set to true

    secure:false,
  },
},
  },
  plugins: [react()],
});
