require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title:"Mexicos's Vacation",
    description: "This is the place to Find the best deals for your Vacation in Mexico | HOTELS IN MEXICO | FLIGHTS TO MEXICO | CAR RENTALS",
    author: "@turistamexico",
    twitterUsername:"@turistamexico",
    image:'/defaultBcg.jpeg',
    siteUrl: "https://mexicosvacation.com"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
