module.exports = {
  siteMetadata: {
    title: "Software Engineering Agency | Tachom",
  },
  plugins: [
    "gatsby-plugin-sass",
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
  ],
};
