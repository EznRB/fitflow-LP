import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { resolveAppLinks } from './src/lib/app-links';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  // Recusar configuração inválida no build, antes de publicar uma página sem CTAs funcionais.
  const development = command === 'serve' && mode !== 'production';
  resolveAppLinks(env.VITE_APP_URL || (development ? 'http://127.0.0.1:3107/' : undefined), development);
  return {
    plugins: [react(), tailwindcss()],
    server: { host: '127.0.0.1', port: 3108, strictPort: true },
    preview: { host: '127.0.0.1', port: 4173, strictPort: true },
  };
});
