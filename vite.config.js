import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths, so the build works at ishang14.github.io or ishang14.github.io/<repo>/
  base: './',
});
