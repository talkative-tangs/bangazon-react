import React, { Component } from "react"
<<<<<<< HEAD
import { Button, Card } from 'semantic-ui-react'
=======
import { Button , Card} from 'semantic-ui-react'
>>>>>>> master
import { Link } from "react-router-dom";

export default class Customers extends Component {
    render() {
        return (
            <Card.Group className="customers-details">
                <Card key={this.props.customer.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Card.Header>{this.props.customer.first_name} {this.props.customer.last_name}</Card.Header>
                            <Button as={Link} size="tiny" color="orange" className="card-link" to={`/ecommerce/customers/edit/${this.props.customer.id}`}>Edit</Button>
                        </h5>
                    </div>
                </Card>
            </Card.Group>
        )
    }
}