import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-spring', '@use-gesture/react', 'react-tradingview-embed']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
});