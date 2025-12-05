import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5004, // Change this to your preferred port
    strictPort: true, // Prevents Vite from switching to another port if 3000 is in use
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
