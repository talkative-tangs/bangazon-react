import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class ProductsEdit extends Component {
    state = {
        customer: "",
        name: "",
        description: "",
        price: "",
        quantity: "",
        product_type: "",
        id: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        // store the existing values in state to start
        let newState = {}
        let products = this.props.products.find(products => products.id === parseInt(this.props.match.params.productsId))
        console.log(products)
        newState.customer = products.customer
        newState.name = products.name
        newState.description = products.description
        newState.price = parseInt(products.price)
        newState.quantity = parseInt(products.quantity)
        newState.product_type = products.product_type
        newState.id = products.id

        this.setState(newState)
    }

    editExistingProduct = e => {
        e.preventDefault()
        const products = {
            customer: this.state.customer,
            name: this.state.name,
            description: this.state.description,
            price: parseInt(this.state.price),
            quantity: parseInt(this.state.quantity),
            product_type: this.state.product_type,
            id: this.state.id
        }
        let productsURL = "http://localhost:8000/api/v1/products/"
        console.log(`${productsURL}${this.state.id}`)
        return this.props.editProduct(products, `${productsURL}${this.state.id}/`)
            .then(() => this.props.history.push("/ecommerce/products/"))
    }

    render() {
        return (
            <div className="container">
                <form className="editProductForm">
                    <div className="form-group">
                        <label htmlFor="productName">Change Product Name</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="name" value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productDescription">Change Product Description</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="description" value={this.state.description} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Change Product Price</label>
                        <input type="number" required className="form-control" onChange={this.handleFieldChange} id="price" value={this.state.price} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productQuantity">Change Product Quantity</label>
                        <input type="number" required className="form-control" onChange={this.handleFieldChange} id="quantity" value={this.state.quantity} />
                    </div>
                    <Button type="submit" size="tiny" color="green" className="btn btn-primary" onClick={this.editExistingProduct}>Submit Edited Product</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/products/`}>Back</Button>
                </form>
            </div>
        );
    }
}