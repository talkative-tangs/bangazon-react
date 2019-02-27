import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import CustomersManager from "../managers/CustomersManager";
import OrdersManager from "../managers/OrdersManager";
import Home from "../components/home/Home";
import Ecommerce from "../components/ecommerce/Ecommerce"
import CustomersList from "../components/ecommerce/customers/CustomersList"
import CustomersForm from "../components/ecommerce/customers/CustomersForm"
import CustomersEdit from "../components/ecommerce/customers/CustomersEdit"
import OrdersList from "../components/ecommerce/orders/OrdersList"
import OrdersForm from "../components/ecommerce/orders/OrdersForm"
import OrdersEdit from "../components/ecommerce/orders/OrdersEdit"

export default class ApplicationViews extends Component {

    state = {
        customers: [],
        orders: [],
        initialize: false
    }

    componentDidMount() {
        let customersLoading = CustomersManager.getAll().then(allCustomers => {
            console.log("all customers", allCustomers)
            this.setState({
                customers: allCustomers
            });
        });
        let ordersLoading = OrdersManager.getAll().then(allOrders => {
          console.log("all orders", allOrders)
          this.setState({
              orders: allOrders
          });
        });

        Promise.all([customersLoading], [ordersLoading]).then(() => {
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
                    <Route exact path="/ecommerce/customers" render={(props) => { return <CustomersList {...props} customers={this.state.customers} /> }} />
                    <Route exact path="/ecommerce/customers/new" render={(props) => { return <CustomersForm {...props} addCustomer={this.addCustomer} /> }} />
                    <Route path="/ecommerce/customers/edit/:customersId(\d+)" render={(props) => { return <CustomersEdit {...props} customers={this.state.customers} editCustomer={this.editCustomer} /> }} />
                    <Route exact path="/ecommerce/orders" render={(props) => { return <OrdersList {...props} orders={this.state.orders} /> }} />
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