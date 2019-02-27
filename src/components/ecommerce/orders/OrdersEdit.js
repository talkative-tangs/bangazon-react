import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class OrdersEdit extends Component {
    state = {
        customer: "",
        payment_type: "",
        product: "",
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
        let orders = this.props.orders.find(orders => orders.id === parseInt(this.props.match.params.ordersId))
        console.log(orders)
        newState.customer = orders.customer
        newState.payment_type = orders.payment_type
        newState.product = orders.product
        newState.id = orders.id

        this.setState(newState)
    }
  
    editExistingOrder = e => {
        e.preventDefault()
        const orders = {
            customer: this.state.customer,
            payment_type: this.state.payment_type,
            product: this.state.product,
            id: this.state.id
        }
        let ordersURL = "http://localhost:8000/api/v1/orders/"
        console.log(`${ordersURL}${this.state.id}`)
        return this.props.editOrder(orders, `${ordersURL}${this.state.id}/`)
            .then(() => this.props.history.push("/ecommerce/orders/"))
    }

    render() {
        return (
            <div className="container">
                <form className="editorderForm">
                    <div className="form-group">
                        <label htmlFor="orderCustomer">Change Customer</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="customer" value={this.state.customer} />
                    </div>

            <React.Fragment>
            <Form className="OrdersEditForm">
              <Form.Field className="form-group">
                <label htmlFor="username">Customer's Username</label>
                <select
                  defaultValue=""
                  name="customer"
                  id="customer"
                  onChange={this.handleFieldChange}
                  >
                  <option value="">Select a Customer</option>
                  {this.props.customers.map(customer => (
                    <option key={customer.id} id={customer.id} value={customer.url}>
                      {customer.username}
                    </option>
                  ))}
                </select>
              </Form.Field>
                <Form.Field className="form-group">
                  <label htmlFor="payment_type">Payment Type</label>
                  <select
                    defaultValue=""
                    name="payment_type"
                    id="payment_type"
                    onChange={this.handleFieldChange}
                    >
                    <option value="">Select a Payment Type</option>
                    {this.props.paymentTypes.map(payment => (
                      <option key={payment.id} id={payment.url}>
                        {payment.account_number}
                      </option>
                    ))}
                  </select>
                </Form.Field>
                <Form.Field>
                <label htmlFor="products">Products</label>
                <select
                  defaultValue=""
                  name="products"
                  id="products"
                  onChange={this.props.handleFieldChange}
                  >
                  <option value="">Select</option>
                  {this.props.products.map(product => (
                    <option key={product.id} id={product.url}>
                      {product.name}
                    </option>
                  ))}
                </select>
                </Form.Field>



                    <div className="form-group">
                        <label htmlFor="orderPaymentType">Change Payment Type</label>
                        <input type="email" required className="form-control" onChange={this.handleFieldChange} id="email" value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="orderProduct">Change Product</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="product" value={this.state.product} />
                    </div>
                    <Button type="submit" size="tiny" color="green" className="btn btn-primary" onClick={this.editExistingOrder}>Submit Edited Order</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/orders/`}>Back</Button>
                {/* </form> */}
            {/* </div> */}
            </Form>
            </React.Fragment>
        );
    }
}