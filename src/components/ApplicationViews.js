import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import CustomersManager from "../managers/CustomersManager";
import Home from "../components/home/Home";
import Ecommerce from "../components/ecommerce/Ecommerce"
import CustomersList from "../components/ecommerce/customers/CustomersList"

export default class ApplicationViews extends Component {

    state = {
        customers: [],
        initialize: false
    }

    componentDidMount() {
        let customersLoading = CustomersManager.getAll().then(allCustomers => {
            console.log("all customers", allCustomers)
            this.setState({
                customers: allCustomers
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

    render() {
        if (this.state.initialized) {
            return (
                <React.Fragment>
                    <Route exact path="/home" render={props => { return <Home />}} />
                    <Route exact path="/ecommerce" render={props => { return <Ecommerce />}} />
                    <Route path="/ecommerce/customers" render={(props) => { return <CustomersList {...props} customers={this.state.customers}/>}} />
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
