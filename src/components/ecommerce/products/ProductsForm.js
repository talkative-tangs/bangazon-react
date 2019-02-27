import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Button, Form, Dropdown } from "semantic-ui-react";

export default class ProductsForm extends Component {
    // Set initial state
    state = {
        customer: "",
        name: "",
        description: "",
        price: "",
        quantity: "",
        product_type: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewProdcut = evt => {
        evt.preventDefault()
        const products = {
            customer: this.state.customer,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            quantity: this.state.quantity,
            product_type: this.state.product_type

        }
        this.props.addProduct(products).then(() => this.props.history.push("/ecommerce/products"))
    }

    render() {
        return (
            <React.Fragment>
                <Form className="ProductsForm">
                    <Form.Field className="form-group">
                        <label htmlFor="username">Seller's Username</label>
                        <select
                            defaultValue=""
                            name="username"
                            id="username"
                            onChange={this.props.handleFieldChange}>
                            <option value="">Select Product's Seller</option>
                            {this.props.customers.map(b => (
                                <option key={b.id} id={b.id}>
                                    {b.username}
                                </option>
                            ))}
                        </select>
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name" placeholder="Input Product's Name Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="textarea" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="description"
                            placeholder="Input Product's Description Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="price" placeholder="Input Product's Price Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="quantity"
                            placeholder="Input Product's Quantity Here..." />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label htmlFor="product_type">Product Type</label>
                        <input type="tel" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="product_type"
                            placeholder="Select Product's Type Here..." />
                    </Form.Field>
                    <Button type="submit" onClick={this.constructNewProdcut} className="btn btn-primary" color="green">Submit</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/products/`}>Back</Button>
                </Form>
            </React.Fragment>
        )
    }
}