/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsConfigPaths(), react()],
  test: {
    environment: 'happy-dom',
    setupFiles: path.resolve(__dirname, './tests/setup-tests.ts'),
  },
});
