import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Default port
    open: true, // Automatically opens the browser on server start
  },
  build: {
    outDir: 'dist', // Build output directory
  },
});
