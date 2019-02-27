import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "../components/home/Home";
import Ecommerce from "../components/ecommerce/Ecommerce"
import CustomersManager from "../managers/CustomersManager";
import CustomersList from "../components/ecommerce/customers/CustomersList"
import CustomersForm from "../components/ecommerce/customers/CustomersForm"
import CustomersEdit from "../components/ecommerce/customers/CustomersEdit"
import ProductsManager from "../managers/ProductsManager";
import ProductsList from "../components/ecommerce/products/ProductsList"
import ProductsForm from "../components/ecommerce/products/ProductsForm"
import ProductsEdit from "../components/ecommerce/products/ProductsEdit"

export default class ApplicationViews extends Component {

    state = {
        customers: [],
        products: [],
        initialize: false
    }

    componentDidMount() {
        let customersLoading = CustomersManager.getAll().then(allCustomers => {
            this.setState({
                customers: allCustomers
            });
        });

        let productsLoading = ProductsManager.getAll().then(allProducts => {
            this.setState({
                products: allProducts
            });
        });

        Promise.all([customersLoading, productsLoading]).then(() => {
            this.setState(
                {
                    initialized: true
                }
            )
        })

    }

    addCustomer = customers =>
        CustomersManager.addAndList(customers)
            .then(() => CustomersManager.getAll()).then(customers =>
                this.setState({
                    customers: customers
                })
            );

    editCustomer = (customers, url) =>
        CustomersManager.putAndListCustomers(customers, url)
            .then(() => CustomersManager.getAll()).then(customers =>
                this.setState({
                    customers: customers
                })
            );

    addProduct = products =>
        ProductsManager.addAndList(products)
            .then(() => ProductsManager.getAll()).then(products =>
                this.setState({
                    products: products
                })
            );

    editProduct = (products, url) =>
        ProductsManager.putAndListCustomers(products, url)
            .then(() => ProductsManager.getAll()).then(products =>
                this.setState({
                    products: products
                })
            );

    render() {
        if (this.state.initialized) {
            return (
                <React.Fragment>
                    <Route exact path="/" render={props => { return <Home /> }} />
                    <Route exact path="/ecommerce" render={props => { return <Ecommerce /> }} />
                    
                    <Route exact path="/ecommerce/customers" render={(props) => { return <CustomersList {...props} customers={this.state.customers} /> }} />
                    <Route exact path="/ecommerce/customers/new" render={(props) => { return <CustomersForm {...props} addCustomer={this.addCustomer} /> }} />
                    <Route path="/ecommerce/customers/edit/:customersId(\d+)" render={(props) => { return <CustomersEdit {...props} customers={this.state.customers} editCustomer={this.editCustomer} /> }} />
                    
                    <Route exact path="/ecommerce/products" render={(props) => { return <ProductsList {...props} products={this.state.products} /> }} />
                    <Route exact path="/ecommerce/products/new" render={(props) => { return <ProductsForm {...props} customers={this.state.customers} addProduct={this.addProduct} /> }} />
                    <Route path="/ecommerce/products/edit/:productsId(\d+)" render={(props) => { return <ProductsEdit {...props} products={this.state.products} editProduct={this.editProduct} /> }} />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Fetching data. . . </h1>
                </React.Fragment>
            )
        }
    }
}
