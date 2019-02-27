import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

export default class ProductTypesForm extends Component {
    // Set initial state
    state = {
        name: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewProductType = evt => {
        evt.preventDefault()
            const productTypes = {
                name: this.state.name,

        }
        this.props.addProductType(productTypes).then(() => this.props.history.push("/ecommerce/productTypes"))
    }

    render() {
        return (
            <React.Fragment>
                <Form className="ProductTypesForm">
                    <Form.Field className="form-group">
                        <label htmlFor="first_name">Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Input Product Type's Name Here..." />
                    </Form.Field>
                    <Button type="submit" onClick={this.constructNewProductType} className="btn btn-primary" color="green">Submit</Button>
                    <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/productTypes/`}>Back</Button>
                </Form>
            </React.Fragment>
        )
    }
}