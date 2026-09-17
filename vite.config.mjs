import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/assets': path.resolve(__dirname, './assets'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});