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
              let customer = this.props.customers.filter(customers => customers.id === order.customer_id)
              let payment = this.props.paymentTypes.filter(payments => payments.id === order.payment_type_id)

              console.log("payment", payment)
              return <Orders key={order.id} order={order} customer={customer}  payment={payment} {...this.props} />
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