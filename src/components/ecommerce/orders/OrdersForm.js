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


  // <select
  // defaultValue=""
  // name="customer"
  // id="customerId"
  // onChange={this.props.handleFieldChange}
  // >
  // <option value="{customer.first_name} {customer.last_name}">Select a Customer</option>
  // {this.state.customer.map(customer => (
  //   <option key={this.props.customer.id} id={this.props.customer.id}>
  //     {customer.first_name} {customer.last_name}
  //   </option>
  // ))}
  // </select>

  render() {
    return (
      <React.Fragment>
        <Form className="OrdersForm">
          <Form.Field className="form-group">
            <label htmlFor="customer">Customer</label>
            <select
              defaultValue=""
              name="customer"
              id="customerId"
              onChange={this.props.handleFieldChange}
              >
              <option value="{customer.first_name} {customer.last_name}">Select a Customer</option>
              {this.state.customer.map(customer => (
                <option key={this.props.customer.id} id={this.props.customer.id}>
                  {customer.first_name} {customer.last_name}
                </option>
              ))}
            </select>
          </Form.Field>
          <Form.Field>
            <select
              defaultValue=""
              name="payment_type"
              id="payment_typeId"
              onChange={this.props.handleFieldChange}
              >
              <option value="{payment_type.id}">Select a Payment Type</option>
              {this.state.payment_type.map(payment_type => (
                <option key={this.props.payment_type.id} id={this.props.payment_type.id}>
                  {this.props.payment_type.id}
                </option>
              ))}
            </select>
          </Form.Field>
          <Form.Field>
              <select
                defaultValue=""
                name="product"
                id="productId"
                onChange={this.props.handleFieldChange}
                >
                <option value="{customer.first_name} {customer.last_name}">Select a Customer</option>
                {this.state.product.map(product => (
                  <option key={this.props.product.id} id={this.props.product.id}>
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