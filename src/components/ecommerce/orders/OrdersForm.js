import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

export default class OrdersForm extends Component {
  // Set initial state
  state = {
      customer: "",
      payment_type: "",
      product: "",
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
  }

  constructNewOrder = evt => {
      evt.preventDefault()
          const orders = {
              customer: this.state.customer,
              payment_type: this.state.payment_type,
              product: this.state.product,
      }
      this.props.addOrder(orders).then(() => this.props.history.push("/ecommerce/orders"))
  }

  render() {
    return (
      <React.Fragment>
        <Form className="OrdersForm">

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
                <option key={payment.id} id={payment.id} value={payment.url}>
                  {payment.payment_name}
                </option>
              ))}
            </select>
          </Form.Field>

          <Form.Field>
              <label htmlFor="products">Products</label>
              <select multiple
                defaultValue=""
                name="products"
                id="products"
                onChange={this.props.handleFieldChange}
                >
                <option value="">Select</option>
                {this.props.products.map(product => (
                  <option key={product.id} id={product.id} value={product.url}>
                    {product.name}
                  </option>
                ))}
              </select>
          </Form.Field>

          <Button type="submit" onClick={this.constructNewOrder} className="btn btn-primary" color="green">Submit</Button>
          <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/orders/`}>Back</Button>
        </Form>
      </React.Fragment>
    )
  }
}