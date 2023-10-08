import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default ({ mode }: any): any => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    console.log('process.env', process.env);

    return defineConfig({
        server: {
            host: true,
            port: parseInt(process.env.VITE_PORT ?? '3001')
        },
        assetsInclude: ['**/*.xlsx', '**/*.xls', '**/*.csv'],
        preview: {
            port: parseInt(process.env.VITE_PORT ?? '3002')
        },
        build: {
            target: 'es2020'
        },
        plugins: [
            react(),
            eslint({
                fix: true,
                lintOnStart: true
            }),
            svgr()
        ],
    });
};
