// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const contentful = require("./plugin.confentful");

module.exports = {
    chainWebpack: config => {
        config.mode("development")
        // config.resolve.alias.set('@images', '@/assets/img')
    },
    siteDescription: "",
    siteUrl: "",
    icon: {
        favicon: "./src/assets/icons/logoBlanco.png", // 96x96
        touchicon: "./src/assets/icons/logoBlanco.png" // 180x180
    },
    plugins: [contentful,
        {
            use: 'gridsome-plugin-tailwindcss',
            /**
             * These are the default options. You don't need to set any options to get
             * going. Seriously, you don't need to declare tailwind.config.js.
             */
            options: {
                tailwindConfig: './tailwind.config.js',
                purgeConfig: {
                    enabled: true,
                    content: [
                        './src/**/*.html',
                        './src/**/*.vue',
                        './src/**/*.jsx',
                    ],
                },
                presetEnvConfig: {},
                shouldPurge: true,
                shouldImport: true,
                shouldTimeTravel: true
            }

        },
        {
            use: '@zefman/gridsome-source-instagram',
            options: {
                username: 'daiilystylee', // Instagram username
                typeName: 'InstagramPhoto' // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
            }
        },
        {
            use: 'gridsome-plugin-nprogress',
            options: {
                // Setting a color is optional.
                color: '#0366d6',
                // Disable the loading spinner.
                showSpinner: false,
            }
        }
    ],
    templates: {
        // ContentfulGallery: "/gallery/:slug",
        ContentfulPost: "/blog/:slug",
        ContentfulPage: "/:slug"
    }
};
