import React, { useState, Children } from "react"
import { Collapse } from 'reactstrap';

const Ccollapse = props => {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);


    return(
        <div className="catalist">
        <div onClick={toggle} className="catahead">{props.name}</div>
            <Collapse isOpen={isOpen}>
                {props.cComponent}
            </Collapse>
        </div>
    )
}

export default Ccollapse;