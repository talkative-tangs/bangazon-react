import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

export default class PaymentTypesForm extends Component {
    // Set initial state
    state = {
        payment_name: "",
        account_number: "",
        customer: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewPaymentType = evt => {
        evt.preventDefault()
            const paymentTypes = {
                payment_name: this.state.payment_name,
                account_number: parseInt(this.state.account_number),
                customer: this.state.customer,

        }
        console.log("payload", paymentTypes)
        this.props.addPaymentType(paymentTypes).then(() => this.props.history.push("/ecommerce/paymentTypes"))
    }

    render() {
        return (
            <React.Fragment>
                <Form className="PaymentTypesForm">
                    <Form.Field className="form-group">
                        <label htmlFor="payment_name">Payment Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="payment_name"
                               placeholder="Input Payment Name Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="account_number">Account Number</label>
                        <input type="number" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="account_number" placeholder="Input Account Number Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="username">Seller's Username</label>
                        <select
                            defaultValue=""
                            name="customer"
                            id="customer"
                            onChange={this.handleFieldChange}
                            >
                            <option value="">Select a Customer</option>
                            {this.props.customers.map(b => (
                                <option key={b.id} id={b.id} value={b.url}>
                                {b.username}
                                </option>
                            ))}
                        </select>
                    </Form.Field>
                    
                    <Button type="submit" onClick={this.constructNewPaymentType} className="btn btn-primary" color="green">Submit</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/paymentTypes/`}>Back</Button>
                </Form>
            </React.Fragment>
        )
    }
}