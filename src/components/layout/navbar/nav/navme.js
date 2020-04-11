import React, { Component} from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Navitem from "./navitem"

class Navme extends Component {
    render() {

        const { data } = this.props;
        const { edges: docs } = data.allPrismicDocs;

        return(
            <div className="bg-light border-right" id="sidebar-wrapper">
                <Link className="sidebar-heading">Developer Jahid</Link>
                <div className="list-group list-group-flush">
                    {
                        docs.map(({ node: doc }) => (
                                <Navitem url={doc.slugs} id={doc.id} name={doc.data.title.text}   />
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

export default () => (
    <StaticQuery
      query={graphql`
          query MyQuery {
            allPrismicDocs {
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
      render={(data, count) => <Navme data={data} count={count} />}
    />
  )