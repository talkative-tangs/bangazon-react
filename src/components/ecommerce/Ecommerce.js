import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import { readdirSync } from "fs";

export default class Home extends Component {
  render() {

    return (
      <div>
        <h1>Landing Page</h1>
        <br />
        <a href='http://localhost:3000/ecommerce/customers'>Customers List</a>
        <br/>
        <a href='http://localhost:3000/ecommerce/productTypes'>ProductTypes List</a>
        <br />
        <a href='http://localhost:3000/ecommerce/products'>Products List</a>
        <br />
        <a href='http://localhost:3000/ecommerce/paymentTypes'>Payment Types List</a>
        <br/>
        <a href='http://localhost:3000/ecommerce/orders'>Orders</a>
        <br/>
        <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/`}>Back</Button>
      </div>
    );
  }
}