const withSass = require('@zeit/next-sass')
module.exports = withSass({
    postcssLoaderOptions: {
        parser: true,
        autoprefixer: true,
        cssModules: true,
        sassLoaderOptions: {
            includePaths: ["absolute/path/a", "absolute/path/b"]
        }
    }
})