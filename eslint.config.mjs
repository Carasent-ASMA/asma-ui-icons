import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
})

export default [
    {
        ignores: [
            'node_modules',
            'node_modules/*',
            'generated/*',
            'dist',
            'build',
            '.vscode',
            'consul_services',
            'REST_API',
            'public',
            'k8s_configs',
            'configs',
            'webpack.config.js',
            'config-overrides.js',
            'craco.config.js',
            'apollo.config.js',
            'serviceWorker.ts',
            'src/*.spec.js',
            'src/**/*.spec.js',
            'src/*.test.js',
            'src/**/*.test.js',
            'cypress',
            'deployment',
            'types',
            'snowpack.config.js',
            'tailwind.config.js',
            'src/index.html',
            'index.html',
        ],
    },
    ...compat.config({
        env: {
            browser: true,
            es2020: true,
        },
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:react-hooks/recommended',
            'plugin:storybook/recommended',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: ['react-refresh'],
        rules: {
            'react-refresh/only-export-components': 'off',
        },
    }),
]