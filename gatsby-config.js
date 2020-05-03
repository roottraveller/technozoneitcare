const config = require('./config');

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: config.siteTitle,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-json',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/assets/data`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.manifestName,
                short_name: config.manifestShortName,
                start_url: config.pathPrefix || config.manifestStartUrl,
                background_color: config.manifestBackgroundColor,
                theme_color: config.manifestThemeColor,
                display: config.manifestDisplay,
                icon: config.manifestIcon, // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
    ],
};
