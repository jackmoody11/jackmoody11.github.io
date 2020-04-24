module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "Jack Moody",
    author: "Jack Moody",
    description: "Learn more about Jack Moody. A UNC-Chapel Hill graduate.",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        // This seemed to not mix well with MDX
        // isTSX: true,
        // jsxPragma: "jsx",
        // allExtensions: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content/euler`,
        name: "euler",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
