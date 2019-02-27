import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class CustomersEdit extends Component {
    state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        address: "",
        phone_number: "",
        id: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        // store the existing values in state to start
        let newState = {}
        let customers = this.props.customers.find(customers => customers.id === parseInt(this.props.match.params.customersId))
        console.log(customers)
        newState.first_name = customers.first_name
        newState.last_name = customers.last_name
        newState.username = customers.username
        newState.email = customers.email
        newState.address = customers.address
        newState.phone_number = customers.phone_number
        newState.id = customers.id

        this.setState(newState)
    }
  
    editExistingCustomer = e => {
        e.preventDefault()
        const customers = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            email: this.state.email,
            address: this.state.address,
            phone_number: this.state.phone_number,
            id: this.state.id
        }
        let customersURL = "http://localhost:8000/api/v1/customers/"
        console.log(`${customersURL}${this.state.id}`)
        return this.props.editCustomer(customers, `${customersURL}${this.state.id}/`)
            .then(() => this.props.history.push("/ecommerce/customers/"))
    }

    render() {
        return (
            <div className="container">
                <form className="editCustomerForm">
                    <div className="form-group">
                        <label htmlFor="customerFirstName">Change First Name</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="first_name" value={this.state.first_name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerLastName">Change Last Name</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="last_name" value={this.state.last_name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerUsername">Change Username</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="username" value={this.state.username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerEmail">Change Email</label>
                        <input type="email" required className="form-control" onChange={this.handleFieldChange} id="email" value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerAddress">Change Address</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="address" value={this.state.address} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerPhoneNumber">Change Phone Number</label>
                        <input type="tel" required className="form-control" onChange={this.handleFieldChange} id="phone_number" value={this.state.phone_number} />
                    </div>
                    <Button type="submit" size="tiny" color="green" className="btn btn-primary" onClick={this.editExistingCustomer}>Submit Edited Customer</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/customers/`}>Back</Button>
                </form>
            </div>
        );
    }
}