const withSass = require('@zeit/next-sass')
module.exports = withSass({
    postcssLoaderOptions: {
        // parser: true,
        autoprefixer: true,
        cssModules: true,
    }
})