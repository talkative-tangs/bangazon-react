import React, { Component } from 'react';
import { Route } from "react-router-dom";

import CustomersManager from "../managers/CustomersManager";
import ProductTypesManager from "../managers/ProductTypesManager";
import ProductsManager from "../managers/ProductsManager";
import PaymentTypesManager from "../managers/PaymentTypesManager";
import OrdersManager from "../managers/OrdersManager";

import Home from "../components/home/Home";
import Ecommerce from "../components/ecommerce/Ecommerce"

import CustomersList from "../components/ecommerce/customers/CustomersList"
import CustomersForm from "../components/ecommerce/customers/CustomersForm"
import CustomersEdit from "../components/ecommerce/customers/CustomersEdit"

import ProductTypesList from "../components/ecommerce/productTypes/ProductTypesList";
import ProductTypesForm from "../components/ecommerce/productTypes/ProductTypesForm";
import ProductTypesEdit from "../components/ecommerce/productTypes/ProductTypesEdit";

import ProductsList from "../components/ecommerce/products/ProductsList"
import ProductsForm from "../components/ecommerce/products/ProductsForm"
import ProductsEdit from "../components/ecommerce/products/ProductsEdit"

import PaymentTypesList from "./ecommerce/paymentTypes/PaymentTypesList"
import PaymentTypesForm from "./ecommerce/paymentTypes/PaymentTypesForm"
import PaymentTypesEdit from "./ecommerce/paymentTypes/PaymentTypesEdit"

import OrdersList from "../components/ecommerce/orders/OrdersList"
import OrdersForm from "../components/ecommerce/orders/OrdersForm"
import OrdersEdit from "../components/ecommerce/orders/OrdersEdit"

export default class ApplicationViews extends Component {

    state = {
        customers: [],
        products: [],
        productTypes: [],
        paymentTypes: [],
        orders: [],
        initialize: false
    }

    componentDidMount() {
        let customersLoading = CustomersManager.getAll().then(allCustomers => {
            this.setState({
                customers: allCustomers
            });
        });
        let ordersLoading = OrdersManager.getAll().then(allOrders => {
          // console.log("all orders", allOrders)
          this.setState({
              orders: allOrders
          });
        });

        

       
        let productTypesLoading = ProductTypesManager.getAll().then(allProductTypes => {
            this.setState({
              productTypes: allProductTypes
            });
        });

        let productsLoading = ProductsManager.getAll().then(allProducts => {
            this.setState({
                products: allProducts
            });
        });

        let paymentTypeLoading = PaymentTypesManager.getAll().then(allPaymentTypes => {
            this.setState({
              paymentTypes: allPaymentTypes
            });
          });

        Promise.all([customersLoading, productTypesLoading, productsLoading, paymentTypeLoading, ordersLoading]).then(() => {
            this.setState(
                {
                    initialized: true
                }
            )
        })

    }

    // Customer
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
                    
    addPaymentType = paymentTypes =>
    PaymentTypesManager.addAndList(paymentTypes)
        .then(() => PaymentTypesManager.getAll()).then(paymentTypes =>
            this.setState({
                paymentTypes: paymentTypes
            })
        );
    
    editPaymentType = (paymentTypes, url) =>
        PaymentTypesManager
        .putAndListPaymentTypes(paymentTypes, url)
            .then(() => PaymentTypesManager.getAll()).then(paymentTypes =>
                this.setState({
                    paymentTypes: paymentTypes
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
        ProductsManager.putAndListProducts(products, url)
            .then(() => ProductsManager.getAll()).then(products =>
                this.setState({
                    products: products
                })
            );

    // Product Types
    addProductType = productTypes =>
        ProductTypesManager.addAndList(productTypes)
            .then(() => ProductTypesManager.getAll()).then(productTypes =>
                this.setState({
                    productTypes: productTypes
                })
            );

    editProductType = (productTypes, url) =>
        ProductTypesManager.putAndListProductTypes(productTypes, url)
            .then(() => ProductTypesManager.getAll()).then(productTypes =>
                this.setState({
                    productTypes: productTypes
                })
            );

    // Orders
    addOrder = orders =>
        OrdersManager.addAndList(orders)
            .then(() => OrdersManager.getAll()).then(orders =>
                this.setState({
                    orders: orders
                })
            );

    editOrder = (orders, url) =>
        OrdersManager.putAndListOrders(orders, url)
            .then(() => OrdersManager.getAll()).then(orders =>
                this.setState({
                    orders: orders
                })
            );

    render() {
        if (this.state.initialized) {
            return (
                <React.Fragment>
                    <Route exact path="/" render={props => { return <Home /> }} />
                    <Route exact path="/ecommerce" render={props => { return <Ecommerce /> }} />
                    
                    <Route exact path="/ecommerce/products" render={(props) => { return <ProductsList {...props} products={this.state.products} /> }} />
                    <Route exact path="/ecommerce/products/new" render={(props) => { return <ProductsForm {...props} customers={this.state.customers} productTypes={this.state.productTypes} addProduct={this.addProduct} /> }} />
                    <Route path="/ecommerce/products/edit/:productsId(\d+)" render={(props) => { return <ProductsEdit {...props} products={this.state.products} customers={this.state.customers} productTypes={this.state.productTypes} editProduct={this.editProduct} /> }} />

                    <Route exact path="/ecommerce/customers" render={(props) => { return <CustomersList {...props} customers={this.state.customers} /> }} />
                    <Route exact path="/ecommerce/customers/new" render={(props) => { return <CustomersForm {...props} addCustomer={this.addCustomer} /> }} />
                    <Route path="/ecommerce/customers/edit/:customersId(\d+)" render={(props) => { return <CustomersEdit {...props} customers={this.state.customers} editCustomer={this.editCustomer} /> }} />

                    <Route exact path="/ecommerce/paymentTypes" render={(props) => { return <PaymentTypesList {...props} paymentTypes={this.state.paymentTypes} /> }} />
                    <Route exact path="/ecommerce/paymentTypes/new" render={(props) => { return <PaymentTypesForm {...props} addPaymentType={this.addPaymentType} customers={this.state.customers} /> }} />
                    <Route path="/ecommerce/paymentTypes/edit/:paymentTypesId(\d+)" render={(props) => { return <PaymentTypesEdit {...props} paymentTypes={this.state.paymentTypes} editPaymentType={this.editPaymentType} /> }} />
                    
                    <Route exact path="/ecommerce/productTypes" render={(props) => { return <ProductTypesList {...props} productTypes={this.state.productTypes} /> }} />
                    <Route exact path="/ecommerce/productTypes/new" render={(props) => { return <ProductTypesForm {...props} addProductType={this.addProductType} /> }} />
                    <Route path="/ecommerce/productTypes/edit/:productTypesId(\d+)" render={(props) => { return <ProductTypesEdit {...props} productTypes={this.state.productTypes} editProductType={this.editProductType} /> }} />

                    <Route exact path="/ecommerce/orders" render={(props) => { return <OrdersList {...props} orders={this.state.orders} customers={this.state.customers} paymentTypes={this.state.paymentTypes} products={this.state.products} /> }} />
                    <Route exact path="/ecommerce/orders/new" render={(props) => { return <OrdersForm {...props} addOrder={this.addOrder} customers={this.state.customers} paymentTypes={this.state.paymentTypes} products={this.state.products} /> }} />
                    <Route path="/ecommerce/orders/edit/:ordersId(\d+)" render={(props) => { return <OrdersEdit {...props} orders={this.state.orders} editOrder={this.editOrder} customers={this.state.customers} paymentTypes={this.state.paymentTypes} products={this.state.products} /> }} />
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