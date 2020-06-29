module.exports = {
  siteMetadata: {
    title: "Mexicos's Vacation",
    description:
      "This is the place to Find the best deals for your Vacation in Mexico | HOTELS IN MEXICO | FLIGHTS TO MEXICO | CAR RENTALS",
    author: "@turistamexico",
    twitterUsername: "@turistamexico",
    image: "/mexicos-vacation.jpg",
    siteUrl: "https://mexicosvacation.com",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mexico's Vacation`,
        short_name: `Mex Vac`,
        start_url: `/`,
        background_color: `#effffd`,
        theme_color: `#1BB297`,
        display: `standalone`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
