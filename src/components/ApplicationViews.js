import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import CustomersManager from "../managers/CustomersManager";
import PaymentTypesManager from "../managers/PaymentTypesManager";
import Home from "../components/home/Home";
import Ecommerce from "../components/ecommerce/Ecommerce"
import CustomersList from "../components/ecommerce/customers/CustomersList"
import CustomersForm from "../components/ecommerce/customers/CustomersForm"
import CustomersEdit from "../components/ecommerce/customers/CustomersEdit"
import PaymentTypesList from "./ecommerce/paymentTypes/PaymentTypesList"
import PaymentTypesForm from "./ecommerce/paymentTypes/PaymentTypesForm"
import PaymentTypesEdit from "./ecommerce/paymentTypes/PaymentTypesEdit"

export default class ApplicationViews extends Component {

    state = {
        customers: [],
        paymentTypes: [],
        initialize: false
    }

    componentDidMount() {
        let customersLoading = CustomersManager.getAll().then(allCustomers => {
            console.log("all customers", allCustomers)
            this.setState({
                customers: allCustomers
            });
        });

        let paymentTypeLoading = PaymentTypesManager.getAll().then(allPaymentTypes => {
            this.setState({
              paymentTypes: allPaymentTypes
            });
          });

        Promise.all([customersLoading]).then(() => {
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


    render() {
        if (this.state.initialized) {
            return (
                <React.Fragment>
                    <Route exact path="/" render={props => { return <Home /> }} />
                    <Route exact path="/ecommerce" render={props => { return <Ecommerce /> }} />
                    <Route exact path="/ecommerce/customers" render={(props) => { return <CustomersList {...props} customers={this.state.customers} /> }} />
                    <Route exact path="/ecommerce/customers/new" render={(props) => { return <CustomersForm {...props} addCustomer={this.addCustomer} /> }} />
                    <Route path="/ecommerce/customers/edit/:customersId(\d+)" render={(props) => { return <CustomersEdit {...props} customers={this.state.customers} editCustomer={this.editCustomer} /> }} />
                    <Route exact path="/ecommerce/paymentTypes" render={(props) => { return <PaymentTypesList {...props} paymentTypes={this.state.paymentTypes} /> }} />
                    <Route exact path="/ecommerce/paymentTypes/new" render={(props) => { return <PaymentTypesForm {...props} addPaymentType={this.addPaymentType} customers={this.state.customers} /> }} />
                    <Route path="/ecommerce/paymentTypes/edit/:paymentTypesId(\d+)" render={(props) => { return <PaymentTypesEdit {...props} paymentTypes={this.state.paymentTypes} editPaymentType={this.editPaymentType} /> }} />
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
