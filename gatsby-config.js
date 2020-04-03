module.exports = {
  siteMetadata: {
    title: "Jack Moody",
    author: "Jack Moody"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-transformer-remark"
  ]
};
