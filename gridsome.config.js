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
            use: 'gridsome-plugin-nprogress',
            options: {
                // Setting a color is optional.
                color: '#0366d6',
                // Disable the loading spinner.
                showSpinner: false,
            }
        },
        {
            use: "gridsome-plugin-service-worker",
            options: {
                networkFirst: {
                    routes: [
                        "/",
                        /\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
                    ],
                },
            },
        },
        {
            use: "gridsome-plugin-manifest",
            options: {
                background_color: "#000000",
                icon_path: "./src/assets/img/icon.png",
                name: "DailyStyle",
                short_name: "DailyStyle",
                theme_color: "#FFFFFF",
                lang: "en",
            },
        },
        {
            use: 'gridsome-plugin-pwa',
            options: {
                title: 'DailyStyle',
                startUrl: '/',
                display: 'standalone',
                statusBarStyle: 'default',
                manifestPath: 'manifest.json',
                disableServiceWorker: true,
                serviceWorkerPath: 'service-worker.js',
                cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
                shortName: 'DailyStyle',
                themeColor: '#666600',
                backgroundColor: '#ffffff',
                icon: 'src/favicon.png', // must be provided like 'src/favicon.png'
                msTileImage: '',
                msTileColor: '#666600'
            }
        },
        {
            use: 'klaro-gridsome',
            options: {
                privacyPolicy: '/privacy-policy/',
                cookieName: 'consent',
                translations: {
                    en: {
                        consentModal: {
                            description: 'Here you can see and customize the information that we collect about you.',
                        },
                        googleAnalytics: {
                            description: 'Website analytics powered by Google Analytics, allowing us to see how visitors use our website.'
                        },
                        purposes: {
                            analytics: 'Analytics'
                        },
                    },
                },
                apps: [
                    {
                        name: 'googleAnalytics',
                        default: true,
                        title: 'Google Analytics',
                        purposes: ['analytics'],
                        cookies: [
                            '_ga',
                            '_gcl_au',
                            '_gid',
                            '_gat'
                        ],
                        required: false,
                        optOut: true,
                        onlyOnce: false
                    }
                ]
            }
        }
    ],
    templates: {
        ContentfulGallery: "/gallery/:slug",
        ContentfulPost: "/blog/:slug",
        ContentfulPage: "/:slug"
    }
};
