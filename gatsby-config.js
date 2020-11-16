require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || 'production'}`,
})

module.exports = {
  siteMetadata: {
    title: `Alex Raymond Travels`,
    description: `Alex Raymond is a travel advisor based in Atlanta, Ga.`,
    author: `https://github.com/jevinkeffers`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `video`,
        path: `${__dirname}/src/assets/videos`,
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
        background_color: `#fffff0`,
        theme_color: `#cc9999`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "jc35ohpaz200",
        accessToken: "gmh4B7LHkPsCNtECd0E5oECnh0jjxZCOL6aNDxp4B7Q",
      },
    },
  ],
}
