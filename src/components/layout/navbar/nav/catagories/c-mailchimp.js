import React, { Component} from "react"
import { StaticQuery, graphql } from "gatsby"
import Navitem from "../navitem"

class Cmailchimp extends Component {
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
          query mailchimp {
            allPrismicDocs(filter: {data: {categories: {text: {eq: "mailchimp"}}}}) {
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
      render={(data, count) => <Cmailchimp data={data} count={count} />}
    />
  )