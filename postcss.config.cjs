/* eslint-disable no-undef */
module.exports = (context) => ({
    plugins: {
        'postcss-import': {}, // Optional, if you're using @import statements
        'tailwindcss/nesting': 'postcss-nesting', // Enable CSS nesting,
        tailwindcss: {},
        autoprefixer: context.env === 'production' ? {} : false,
    },
})
