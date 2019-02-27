import React, { Component } from "react";
import ProductTypes from "../productTypes/ProductTypes"
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

export default class ProductTypesList extends Component {
  render() {

    return (
      <React.Fragment>
        <section className="productTypes-list">
          <h1>List of Product Types:</h1>
          {
            this.props.productTypes.map(productType => {
              return <ProductTypes key={productType.id} productType={productType} {...this.props} />
            })
          }
        </section>
        <section className="productTypesButton">
          <Button color="green" type="button"
            className="btn btn-success"
            onClick={() => { this.props.history.push("/ecommerce/productTypes/new") }}>
            New Product Type
          </Button>
          <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/`}>Back</Button>
        </section>
      </React.Fragment>
    );
  }
}