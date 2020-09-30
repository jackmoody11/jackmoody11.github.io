module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "Jack Moody",
    name: "Jack Moody",
    author: "Jack Moody",
    siteUrl: `https://jack-moody.com`,
    description: "Learn more about Jack Moody. A UNC-Chapel Hill graduate.",
    hero: {
      heading: `My take on programming, finance, and more.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `stackoverflow`,
        url: `https://stackoverflow.com/users/8206432/jack-moody`,
      },
      {
        name: `github`,
        url: `https://github.com/jackmoody11`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        authorsPage: true,
        authorsPath: "/authors",
        rootPath: "/",
        basePath: "/",
        pageLength: 6,
        sources: {
          local: true,
        },
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
