const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const docPost = path.resolve('./src/templates/doc.js')
    resolve(
      graphql(
        `
          {
            allPrismicDocs {
              edges {
                node {
                  id
                  slugs
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const docs = result.data.allPrismicDocs.edges
        docs.forEach((doc, index) => {
          createPage({
            path: `${doc.node.slugs[0]}/`,
            component: docPost,
            context: {
              slug: doc.node.id,
            },
          })
        })
      })
    )
  })
}