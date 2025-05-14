import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Copy the asset directories to the build output
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Include these file types as assets
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.mp4', '**/*.svg'],
});
