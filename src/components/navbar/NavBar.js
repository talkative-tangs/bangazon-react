import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleHeader extends Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu pointing>
                <Menu.Item
                    as={Link}
                    to="/ecommerce/customers"
                    name="customers"
                    active={activeItem === "customers"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/ecommerce/productTypes"
                    name="Product Types"
                    active={activeItem === "Product Types"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/ecommerce/products"
                    name="products"
                    active={activeItem === "products"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/ecommerce/paymentTypes"
                    name="payment types"
                    active={activeItem === "payment types"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/ecommerce/orders"
                    name="orders"
                    active={activeItem === "orders"}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                    <Menu.Item
                        as={Link}
                        to="/"
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        );
    }
}