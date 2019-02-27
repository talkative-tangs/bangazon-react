import React, { Component } from "react"
import { Button, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class Customers extends Component {
    render() {
        return (
            <section className="customers-details">
                <div key={this.props.customer.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h2>{this.props.customer.first_name} {this.props.customer.last_name}</h2>
                            {console.log("customer id", this.props.customer.id)}
                            <Button as={Link} size="tiny" color="orange" className="card-link" to={`/ecommerce/customers/edit/${this.props.customer.id}`}>Edit</Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}