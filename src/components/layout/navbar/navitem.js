import React from "react"
import { Link } from "gatsby"

const Navitem = ( props ) => {
    return (
        <li className="sidelist">
            <Link className='bg-dark alink list-group-item list-group-item-action djitems' to={props.url}>{props.name}</Link>
        </li>
    )
}

export default Navitem
