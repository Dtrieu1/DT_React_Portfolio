import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Dtrieu1.github.io/DT_React_Portfolio",
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
