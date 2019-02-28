import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class PaymentTypesEdit extends Component {
    state = {
        payment_name: "",
        account_number: "",
        customer: "",
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
        let paymentTypes = this.props.paymentTypes.find(paymentTypes => paymentTypes.id === parseInt(this.props.match.params.paymentTypesId))
        console.log(paymentTypes)
        newState.payment_name = paymentTypes.payment_name
        newState.account_number = paymentTypes.account_number
        newState.customer = paymentTypes.customer
        newState.id = paymentTypes.id

        this.setState(newState)
    }
  
    editExistingPaymentType = e => {
        e.preventDefault()
        const paymentTypes = {
            payment_name: this.state.payment_name,
            account_number: parseInt(this.state.account_number),
            customer: this.state.customer,
            id: this.state.id
        }
        let paymentTypesURL = "http://localhost:8000/api/v1/payment_type/"
        console.log(`${paymentTypesURL}${this.state.id}`)
        return this.props.editPaymentType(paymentTypes, `${paymentTypesURL}${this.state.id}/`)
            .then(() => this.props.history.push("/ecommerce/paymentTypes/"))
    }

    render() {
        return (
            <div className="container">
                <form className="editPaymentTypeForm">
                    <div className="form-group">
                        <label htmlFor="paymentTypeName">Change Payment Name</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="payment_name" value={this.state.payment_name} />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="paymentTypeAccountNumber">Change Account Number</label>
                        <input type="number" required className="form-control" onChange={this.handleFieldChange} id="account_number" value={this.state.account_number} />
                    </div> */}
                    {/* <div className="form-group">
                        <label htmlFor="paymentTypeCustomer">Change Customer</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="customer" value={this.state.customer} />
                    </div> */}
                    
                    
                    <Button type="submit" size="tiny" color="green" className="btn btn-primary" onClick={this.editExistingPaymentType}>Submit Edited Payment Type</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/paymentTypes/`}>Back</Button>
                </form>
            </div>
        );
    }
}