import React, { Component } from "react";
import Products from "../products/Products"
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

export default class ProductsList extends Component {
  render() {

    return (
      <React.Fragment>
        <section className="products-list">
          <h1>List of Products:</h1>
          {
            this.props.products.map(product => {
              return <Products key={product.id} product={product} {...this.props} />
            })
          }
        </section>
        <section className="productsButton">
          <Button color="green" type="button"
            className="btn btn-success"
            onClick={() => { this.props.history.push("/ecommerce/products/new") }}>
            New Product
          </Button>
          <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/`}>Back to Ecommerce</Button>
        </section>
      </React.Fragment>
    );
  }
}