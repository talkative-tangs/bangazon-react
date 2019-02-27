import React, { Component } from "react"
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class Products extends Component {
    render() {
        return (
            <section className="products-details">
                <div key={this.props.product.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h2>Name: {this.props.product.name}</h2>
                            <p>Price: {this.props.product.price}</p>
                            <p>Quantity: {this.props.product.quantity}</p>
                            <p>Desc: {this.props.product.description}</p>
                            {console.log("product id", this.props.product.id)}
                            <Button as={Link} size="tiny" color="orange" className="card-link" to={`/ecommerce/products/edit/${this.props.product.id}`}>Edit</Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}