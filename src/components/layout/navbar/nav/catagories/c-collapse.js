import React from "react"

const Ccollapse = props => {
    return(
        <div className="catalist">
        <div className="catahead">{props.name}</div>
            {props.cComponent}
        </div>
    )
}

export default Ccollapse;