import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu'] // ⛔️ Exclude problematic native module
    }
  }
});
