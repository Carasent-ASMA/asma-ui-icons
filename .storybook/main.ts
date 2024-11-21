import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preview-api',
        '@storybook/manager-api',
        '@storybook/preset-create-react-app',
        '@chromatic-com/storybook',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: './vite.config.ts',
            },
        },
    },
    docs: {},
    core: {},
    typescript: {
        check: true,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            savePropValueAsString: true,
            propFilter: (prop) =>
                prop.parent
                    ? /@material-ui/.test(prop.parent.fileName) || !/node_modules/.test(prop.parent.fileName)
                    : true,
            compilerOptions: {
                allowSyntheticDefaultImports: false,
            },
        },
    },
}
export default config
