import React, { Component } from "react"
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class PaymentTypes extends Component {
    render() {
        return (
            <section className="paymentTypes-details">
                <div key={this.props.paymentType.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h2>{this.props.paymentType.payment_name}</h2>
                            <Button as={Link} size="tiny" color="orange" className="card-link" to={`/ecommerce/paymentTypes/edit/${this.props.paymentType.id}`}>Edit</Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}