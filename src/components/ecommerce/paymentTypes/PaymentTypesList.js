import React, { Component } from "react";
import PaymentTypes from "../paymentTypes/PaymentTypes"
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

export default class PaymentTypesList extends Component {
  render() {

    return (
      <React.Fragment>
        <section className="paymentTypes-list">
          <h1>List of Payment Types:</h1>
          {
            this.props.paymentTypes.map(paymentType => {
              return <PaymentTypes key={paymentType.id} paymentType={paymentType} {...this.props} />
            })
          }
        </section>
        <section className="paymentTypesButton">
          <Button color="green" type="button"
            className="btn btn-success"
            onClick={() => { this.props.history.push("/ecommerce/paymentTypes/new") }}>
            New Payment Type
          </Button>
          <Button as={Link} size="tiny" color="yellow" className="card-link" to={`/ecommerce/`}>Back</Button>
        </section>
      </React.Fragment>
    );
  }
}