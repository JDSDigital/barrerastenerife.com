const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Inmobiliaria Barreras`,
    description: `INMOBILIARIA BARRERAS nace en pintoresco pueblo de pescadores de nombre Los Abrigos ubicado en la parte sur de la isla de Tenerife en el año 1995.`,
    author: `Jorge Daniel Sosa <jdsosa@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        models: path.join(__dirname, "src/models"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,400i,700`,
          "Monsieur La Doulaise",
          "Source Sans Pro:400;700",
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          // apiKey: "<YOUR_FIREBASE_API_KEY>",
          // authDomain: "<YOUR_FIREBASE_AUTH_DOMAIN>",
          // databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
          projectId: "barrerastenerife", // <YOUR_FIREBASE_PROJECT_ID>
          // storageBucket: "<YOUR_FIREBASE_STORAGE_BUCKET>",
          // messagingSenderId: "<YOUR_FIREBASE_MESSAGING_SENDER_ID>",
          // appId: "<YOUR_FIREBASE_APP_ID>",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`es`, `en`, `ru`, `it`],
        defaultLanguage: `es`,

        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          // keySeparator: false,
          // keySeparator: ".",
          // nsSeparator: false,
        },
        // pages: [
        //   // {
        //   //   matchPath: '/:lang?/blog/:uid',
        //   //   getLanguageFromPath: true,
        //   //   excludeLanguages: ['es']
        //   // },
        //   {
        //     matchPath: "/",
        //     // getLanguageFromPath: true,
        //     languages: ["es", "en"],
        //   },
        // ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
