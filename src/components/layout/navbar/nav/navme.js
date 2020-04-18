import React from "react"
import { Link } from "gatsby"
import Ccollapse from "./catagories/c-collapse"
import Cbootstarp from "./catagories/c-bootstarp"
import Cprismic from "./catagories/c-prismic"
import Cmailchimp from "./catagories/c-mailchimp"
import Cnetlify from "./catagories/c-netlify"

const Navme = () => {
    return(
        <div className="bg-dark position-fixed" id="sidebar-wrapper">
            <Link className="sidebar-heading">Developer Jahid</Link>
            <Ccollapse name="Bootstarp" cComponent={ <Cbootstarp /> } />
            <Ccollapse name="Prismic" cComponent={ <Cprismic /> } />
            <Ccollapse name="Mailchimp" cComponent={ <Cmailchimp /> } />
            <Cnetlify name="Netlify" cComponent={ <Cnetlify /> } />
        </div>
    )
}

export default Navme;