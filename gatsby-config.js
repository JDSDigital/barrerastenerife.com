const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Inmobiliaria Barreras",
    description:
      "INMOBILIARIA BARRERAS nace en pintoresco pueblo de pescadores de nombre Los Abrigos ubicado en la parte sur de la isla de Tenerife en el año 1995.",
    author: "Jorge Daniel Sosa <jdsosa@gmail.com>",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/images/logo/favicon-32x32.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Roboto:300,400,400i,700",
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
          projectId: "barrerastenerife",
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/locales`,
        name: "locale",
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale",
        languages: ["es", "en", "ru", "it"],
        defaultLanguage: "es",

        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
        },
      },
    },
  ],
};
