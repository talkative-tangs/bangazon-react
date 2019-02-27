import React, { Component } from "react";
import Customers from "../customers/Customers"
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

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
        <section className="customersButton">
          <Button color="green" type="button"
            className="btn btn-success"
            onClick={() => { this.props.history.push("/ecommerce/customers/new") }}>
            New Customer
          </Button>
          <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/`}>Back</Button>
        </section>
      </React.Fragment>
    );
  }
}