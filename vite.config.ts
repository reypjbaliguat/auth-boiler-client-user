/// <reference types="vitest" />

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@layouts': path.resolve(__dirname, 'src/core/layouts'),
            '@pages': path.resolve(__dirname, 'src/core/pages'),
            '@components': path.resolve(__dirname, 'src/core/components'),
            '@context': path.resolve(__dirname, 'src/core/context'),
        },
    },
});
