import React from "react"
import { Card,  CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import { Link } from "gatsby"

const IndexItem = ( props ) => {
    return (
        <Link to={props.url}>
            <Card>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.date}</CardSubtitle>
                </CardBody>
            </Card>
        </Link>
    )
}

export default IndexItem