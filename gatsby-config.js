module.exports = {
  siteMetadata: {
    title: `Charles Vandevoorde`,
    description: `Personal website of Charles Vandevoorde`,
    author: `Charles Vandevoorde`,
    siteUrl: `https://vandevoorde.me`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogpost`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-background-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
  ],
}
