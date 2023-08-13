import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@/components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@/pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@/API',
        replacement: path.resolve(__dirname, 'src/API'),
      },
      {
        find: '@/assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@/constpack',
        replacement: path.resolve(__dirname, 'src/constpack'),
      },
    ],
  },
  envDir: './env',
});
