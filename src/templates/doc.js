import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

class Doc extends Component {
  render() {

    const { data } = this.props.data.doc
    const title = data.title.text

    return(
      <Layout>
          <div className="title">
            <p className="head1">{title}</p>
              <span className="date">{data.date}</span> 
          </div>
          
          <div
          className="doc-post-content"
          dangerouslySetInnerHTML={{ __html: data.doc.html }}
          />
      </Layout>
    )
  }
}

export default Doc

export const docQuery = graphql`
  query Doc($slug: String) {
    doc: prismicDocs(id: { eq: $slug }) {
      id
      data {
        title {
          text
        }
        doc {
          html
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`