import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
    },
    css: {
        preprocessorOptions: {
            less: {
                math: 'always',
                relativeUrls: true,
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': '#2f54eb',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, 'public'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@lotties': path.resolve(__dirname, 'src/lotties'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@redux': path.resolve(__dirname, 'src/redux'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@style': path.resolve(__dirname, 'src/style'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@ui': path.resolve(__dirname, 'src/ui'),
        },
    },
});
