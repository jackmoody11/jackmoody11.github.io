const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value: `${value}`,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Get path to template
  const blogTemplate = path.resolve("./src/templates/blog.tsx");
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

  // Get markdown data
  const blogQuery = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { posttype: { eq: "blog" } } }
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
  // Create new pages
  const blogPosts = blogQuery.data.allMdx.edges;
  const eulerPosts = eulerQuery.data.allMdx.edges;

  blogPosts.forEach(({ node }, index) => {
    // pagination
    const prev = index === 0 ? false : blogPosts[index - 1].node;
    const next =
      index === blogPosts.length - 1 ? false : blogPosts[index + 1].node;

    createPage({
      component: blogTemplate,
      path: `blog${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
        prev: prev,
        next: next,
      },
    });
  });

  eulerPosts.forEach(({ node }, index) => {
    // pagination for link to next solution
    const prev = index === 0 ? false : eulerPosts[index - 1].node;
    const next =
      index === eulerPosts.length - 1 ? false : eulerPosts[index + 1].node;

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
