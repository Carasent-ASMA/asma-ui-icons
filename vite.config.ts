import { readFileSync, readdirSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { relative, resolve } from 'path'
import dts from 'vite-plugin-dts'
import terser from '@rollup/plugin-terser'
import * as packageJson from './package.json'

const peerDependencies = Object.keys(packageJson.peerDependencies)

const isPeerDependencyExternal = (id: string) => {
    return peerDependencies.some((dependency) => id === dependency || id.startsWith(`${dependency}/`))
}

type AssetEmitterContext = {
    emitFile: (file: { type: 'asset'; fileName: string; source: string }) => void
}

const iconsSourceDirectory = resolve('src', 'components', 'icons')

const collectIconIndexFiles = (directory: string): string[] => {
    const paths = readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = resolve(directory, entry.name)

        if (entry.isDirectory()) {
            return collectIconIndexFiles(entryPath)
        }

        return entry.name === 'index.ts' ? [entryPath] : []
    })

    return paths.sort()
}

const createJavascriptWrapperSource = (indexFilePath: string): string => {
    const source = readFileSync(indexFilePath, 'utf8')

    return source.replace(/from\s+(['"])(\.\/[^'"]+)\1/g, 'from $1$2.js$1')
}

const emitCompatibilityAssets = () => ({
    name: 'emit-compatibility-assets',
    generateBundle(this: AssetEmitterContext) {
        for (const indexFilePath of collectIconIndexFiles(iconsSourceDirectory)) {
            this.emitFile({
                type: 'asset',
                fileName: relative(resolve('src'), indexFilePath).replace(/\.ts$/, '.js'),
                source: createJavascriptWrapperSource(indexFilePath),
            })
        }

        this.emitFile({
            type: 'asset',
            fileName: 'asma-ui-icons.es.js',
            source: 'export * from "./index.js";\n',
        })

        this.emitFile({
            type: 'asset',
            fileName: 'style.css',
            source: '/* Intentionally empty compatibility stylesheet. */\n',
        })
    },
})

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',
        }),
        dts({
            insertTypesEntry: true,
            exclude: ['node_modules/**/*', 'src/stories/**', 'src/**/*.stories.tsx', 'src/components/**/makeData.ts'],
        }),
    ],
    build: {
        lib: {
            entry: resolve('src', 'index.ts'),
            name: 'asma-ui-icons',
            formats: ['es'],
        },
        rollupOptions: {
            external: isPeerDependencyExternal,
            plugins: [emitCompatibilityAssets()],
            output: {
                entryFileNames: '[name].js',
                plugins: [terser()],
                preserveModules: true,
                preserveModulesRoot: 'src',
            },
        },
    },
})
