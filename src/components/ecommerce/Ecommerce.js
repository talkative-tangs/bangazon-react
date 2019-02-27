import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import { readdirSync } from "fs";

export default class Home extends Component {
  render() {
    
    return (
      <React.Fragment>
        <div>
          <h1>Bangazon</h1>
          <br/>
          <a href='http://localhost:3000/ecommerce/customers'>Customers</a>
          <br/>
        </div>
        <div>
          <br/>
          <a href='http://localhost:3000/ecommerce/products'>Products</a>
          <br/>
        </div>
        <div>
          <br/>
          <a href='http://localhost:3000/ecommerce/product_type'>Product Types</a>
          <br/>
        </div>
        <div>
          <br/>
          <a href='http://localhost:3000/ecommerce/orders'>Orders</a>
          <br/>
        </div>
        <div>
          <br/>
          <a href='http://localhost:3000/ecommerce/payment_type'>Payment Types</a>
          <br/>
        </div>
        <div>
          <br/>
          <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/`}>Back</Button>
        </div>
      </React.Fragment>
    );
  }
}