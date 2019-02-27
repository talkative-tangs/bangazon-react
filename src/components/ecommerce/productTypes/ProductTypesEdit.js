import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class ProductTypesEdit extends Component {
    state = {
        name: "",
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
        let productTypes = this.props.productTypes.find(productTypes => productTypes.id === parseInt(this.props.match.params.productTypesId))
        console.log(productTypes)
        newState.name = productTypes.name
        newState.id = productTypes.id

        this.setState(newState)
    }

    editExistingProductType = e => {
        e.preventDefault()
        const productTypes = {
            name: this.state.name,
            id: this.state.id
        }
        let productTypesURL = "http://localhost:8000/api/v1/product_type/"
        console.log(`${productTypesURL}${this.state.id}`)
        return this.props.editProductType(productTypes, `${productTypesURL}${this.state.id}/`)
            .then(() => this.props.history.push("/ecommerce/productTypes/"))
    }

    render() {
        return (
            <div className="container">
                <form className="editProductTypeForm">
                    <div className="form-group">
                        <label htmlFor="productTypeName">Change Name</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="name" value={this.state.name} />
                    </div>
                    <Button type="submit" size="tiny" color="green" className="btn btn-primary" onClick={this.editExistingProductType}>Submit Edited Product Type</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/productTypes/`}>Back</Button>
                </form>
            </div>
        );
    }
}