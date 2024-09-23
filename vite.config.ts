import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      eslint: {
        lintCommand: 'eslint .',
      },
      typescript: {
        tsconfigPath: 'tsconfig.app.json',
      },
    }),
    react(),
    tsconfigPaths(),
  ],
});
