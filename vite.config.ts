import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Youtube-Shorts-Clone/', // Убедитесь, что путь соответствует вашему репозиторию
  plugins: [react()]
});
