import React, { Component } from "react"
import { Button , Card} from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class ProductTypes extends Component {
    render() {
        return (
            <Card.Group className="productTypes-details">
                <Card key={this.props.productType.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Card.Header>{this.props.productType.name}</Card.Header>
                            <Button as={Link} size="tiny" color="orange" className="card-link" to={`/ecommerce/productTypes/edit/${this.props.productType.id}`}>Edit</Button>
                        </h5>
                    </div>
                </Card>
            </Card.Group>
        )
    }
}