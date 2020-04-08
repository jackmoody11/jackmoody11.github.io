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
  const blogTemplate = path.resolve("./src/templates/blog.js");
  const eulerTemplate = path.resolve("./src/templates/euler.js");

  // Get markdown data
  const posts = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              posttype
              date
              tags
            }
          }
        }
      }
    }
  `);
  // Create new pages
  const posts = query.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    if (node.frontmatter.posttype === "blog") {
      createPage({
        component: blogTemplate,
        path: `blog${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      });
    } else if (node.frontmatter.posttype === "euler") {
      createPage({
        component: eulerTemplate,
        path: `euler${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      });
    }
  });
};
