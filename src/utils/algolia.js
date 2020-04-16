const pageQuery = `{
    docs: allPrismicDocs {
        edges {
          node {
            data {
              title {
                text
              }
              date(formatString: "MMMM DD, YYYY")
            }
            uid
          }
        }
      }
    }`

    const flatten = arr =>
      arr.map(({ node: { data, ...rest } }) => ({
      ...data,
      ...rest,
    }))
    const queries = [{
      query: pageQuery,
      transformer: ({ data }) => flatten(data.docs.edges),
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    }]

module.exports = queries