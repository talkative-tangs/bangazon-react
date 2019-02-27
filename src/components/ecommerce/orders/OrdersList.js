import React, { Component } from "react";
import Orders from "../orders/Orders"
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

export default class OrdersList extends Component {
  render() {

    return (
      <React.Fragment>
        <section className="orders-list">
          <h1>List of Orders:</h1>
          {
            this.props.orders.map(order => {
              return <Orders key={order.id} order={order} {...this.props} />
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