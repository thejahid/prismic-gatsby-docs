import React, { Component} from "react"
import { StaticQuery, graphql } from "gatsby"
import Navitem from "../navitem"

class Cprismic extends Component {
    render() {

        const { data } = this.props;
        const { edges: docs } = data.allPrismicDocs;

        return(
            <div className="list-group list-group-flush">
                {
                    docs.map(({ node: doc }) => (
                            <Navitem url={doc.slugs} id={doc.id} name={doc.data.title.text}   />
                        )
                    )
                }
            </div>
        )
    }
}

export default () => (
    <StaticQuery
      query={graphql`
          query prismic {
            allPrismicDocs(filter: {data: {categories: {text: {eq: "prismic"}}}}) {
                edges {
                  node {
                    slugs
                    id
                    data {
                        title {
                          text
                        }
                    }
                  }
               }
            }  
          }    
      `}
      render={(data, count) => <Cprismic data={data} count={count} />}
    />
  )