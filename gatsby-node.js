const {
  createFilePath
} = require("gatsby-source-filesystem");
const path = require("path");

module.exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({
      node,
      getNode
    });
    createNodeField({
      name: "slug",
      node,
      value: `${value}`,
    });
  }
};

module.exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;

  // Get path to template
  const eulerTemplate = path.resolve("./src/templates/euler.tsx");

  const eulerQuery = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { posttype: { eq: "euler" } } }
        sort: { fields: [fields___slug], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const eulerPosts = eulerQuery.data.allMdx.edges;

  eulerPosts.forEach(({
    node
  }, index) => {
    // pagination for link to next solution
    const prev = index === 0 ? null : eulerPosts[index - 1].node;
    const next =
      index === eulerPosts.length - 1 ? null : eulerPosts[index + 1].node;

    createPage({
      component: eulerTemplate,
      path: `euler${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
        prev: prev,
        next: next,
      },
    });
  });
};