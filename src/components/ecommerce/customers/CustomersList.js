import React, { Component } from "react";
import Customers from "../customers/Customers"

export default class CustomersList extends Component {
  render() {

    return (
      <React.Fragment>
        <section className="customers-list">
          <h1>List of Customers:</h1>
          {
            this.props.customers.map(customer => {
              return <Customers key={customer.id} customer={customer} {...this.props} />
            })
          }
        </section>
      </React.Fragment>

    );
  }
}