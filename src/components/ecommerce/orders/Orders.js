import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Orders extends Component {
  render() {
    return (
      <section className="orders-details">
        <div key={this.props.order.id} className="card">
          <div className="card-body">
            <div className="card-title">
              <h2>
                Order number {this.props.order.id}
              </h2>
              {console.log("order id", this.props.order.id)}
              <Button
                as={Link}
                size="tiny"
                color="orange"
                className="card-link"
                to={`/ecommerce/orders/edit/${this.props.order.id}`}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
