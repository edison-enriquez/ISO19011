import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // En GitHub Pages el sitio cuelga de /<nombre-del-repo>/, no de la raíz.
  // El workflow de despliegue define VITE_BASE; en local queda en '/'.
  // src/main.tsx pasa este mismo valor como basename al BrowserRouter
  // leyéndolo de import.meta.env.BASE_URL, así que no hay que tocar dos sitios.
  base: process.env.VITE_BASE ?? '/',
  server: { port: 5173, open: true },
});
