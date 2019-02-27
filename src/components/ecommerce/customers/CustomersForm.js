import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

export default class CustomersForm extends Component {
    // Set initial state
    state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        address: "",
        phone_number: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewCustomer = evt => {
        evt.preventDefault()
            const customers = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                email: this.state.email,
                address: this.state.address,
                phone_number: this.state.phone_number

        }
        this.props.addCustomer(customers).then(() => this.props.history.push("/ecommerce/customers"))
    }

    render() {
        return (
            <React.Fragment>
                <Form className="CustomersForm">
                    <Form.Field className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="first_name"
                               placeholder="Input Customer's First Name Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="last_name" placeholder="Input Customer's Last Name Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="username"
                               placeholder="Input Customer's Username Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="email" placeholder="Input Customer's E-Mail Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="address"
                               placeholder="Input Customer's Address Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input type="tel" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone_number"
                               placeholder="Input Customer's Phone Number Here..." />
                    </Form.Field>
                    <Button type="submit" onClick={this.constructNewCustomer} className="btn btn-primary" color="green">Submit</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/customers/`}>Back</Button>
                </Form>
            </React.Fragment>
        )
    }
}