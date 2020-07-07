/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Toma Otani Portfolio`,
    description: `This is Toma Otani's portfolio website.`,
    lang: `en`,
    siteUrl: `https://tomaotani.com`,
    locale: `en_US`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXX`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Toma Otani Portfolio`,
        short_name: `Toma Otani Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffad00`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-smoothscroll`
  ],
}
