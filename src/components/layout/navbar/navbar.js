import React, { Component,Fragment } from "react"
import { Link, StaticQuery } from "gatsby"
import Navitem from "./navitem"
import { ListGroup } from 'reactstrap';

class Navbar extends Component {
  render() {

      const { data } = this.props;
      const { edges: docs } = data.allPrismicDocs;

      return(
        <Fragment>
        <div className="bg-dark position-fixed" id="sidebar-wrapper">
              <Link className="sidebar-heading">Developer Jahid</Link>
              <ListGroup>
                {
                    docs.map(({ node: doc }) => (
                            <Navitem url={doc.slugs} id={doc.id} name={doc.data.title.text}   />
                        )
                    )
                }
            </ListGroup>
          </div>
      </Fragment> 
      )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
        query bootstarp {
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
    render={(data, count) => <Navbar data={data} count={count} />}
  />
)