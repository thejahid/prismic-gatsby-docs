import React from "react"
import { Link } from "gatsby"

const Navitem = ( props ) => {
    return (
        <Link className='alink list-group-item list-group-item-action bg-light' to={props.url}>{props.name}</Link>
    )
}

export default Navitem
