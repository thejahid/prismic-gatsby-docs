import React, { Component }from "react"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/app.css"
import { Input, CardColumns } from "reactstrap"
import Layout from "../components/layout/layout"
import IndexItem from "./index/indexitem"


class IndexPage extends Component {
    render() {

        const { data } = this.props;
        const { edges: docs } = data.allPrismicDocs;

        return(
            <Layout>
              <div className="indexform">
                  <div className="catagoryform float-left">
                      <Input bsSize="sm" type="select" name="select">
                        <option>All</option>
                        <option>2</option>
                      </Input>
                    </div>
                    <div className="searchform float-right">
                      <form className="input-group searchbox ">
                          <Input type="search" bsSize="sm" name="text" className="form-control" placeholder="Search the Users" /> 
                      </form>
                    </div>
              </div>
                <CardColumns>
                    {
                        docs.map(({ node: doc }) => (
                            <IndexItem url={doc.slugs} key={doc.id} date={doc.data.date} name={doc.data.title.text} />
                            )
                        )
                    }
                </CardColumns>
            </Layout>
        )
    }
}
    

export default IndexPage

export const docQuery = graphql`
  query IndexDoc {
        allPrismicDocs {
          edges {
            node {
              data {
                title {
                  text
                }
                date(formatString: "MMMM DD, YYYY")
              }
              slugs
              id
            }
          }
        }
    }
`