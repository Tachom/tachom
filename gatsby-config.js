module.exports = {
  siteMetadata: {
    title: "Team Tachom",
    siteUrl: "https://tachom.co.zw",
    titleTemplate: "%s · Software Engineering Team",
    description:"We are Team Tachom, a Software Engineering team based in Zimbabwe. We develop creative but simple to use software solutions without compromising on security and we are looking forward to working with you on your next big project.",
    url: "https://tachom.co.zw", // No trailing slash allowed!
    image: "/images/logo.ppg",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-2E7QZKF94H", // Google Analytics / GA
        ],
      },
    },
  ],
};
