import React, { Component } from "react";
import Orders from "../orders/Orders"
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

export default class OrdersList extends Component {
  render() {

    return (
      <React.Fragment>
        <section className="orders-list">
          <h1>All Orders:</h1>
          {
            this.props.orders.map(order => {
              let customer = this.props.customers.filter(customer => customer.id === order.customer_id)
              let payment = this.props.paymentTypes.filter(payment => payment.url === order.payment_type)
              let products = order.product.map(op => {
              return this.props.products.filter(product => product.url === op)})
              return <Orders key={order.id} order={order} customer={customer} payment={payment} products={products}/>
            })
          }
        </section>
        <section className="ordersButton">
          <Button color="green" type="button"
            className="btn btn-success"
            onClick={() => { this.props.history.push("/ecommerce/orders/new") }}>
            New Order
          </Button>
          <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/`}>Back</Button>
        </section>
      </React.Fragment>
    );
  }
}