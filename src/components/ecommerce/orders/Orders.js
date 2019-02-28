import React, { Component } from "react";
import { Button, Card, CardDescription } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Orders extends Component {
  render() {
    return (
        <Card key={this.props.order.id} className="card">
          <Card.Content>
            <div className="card-body">
              <div className="card-title">
              <Card.Header textAlign="center">Order #{this.props.order.id}</Card.Header>

              {console.log(this.props.customers)}
              {console.log(this.props.products)}
              {console.log(this.props.paymentTypes)}
              {console.log(this.props.customers.id)}
              
              <Card.Description>
              <ul style={{listStyleType: "none"}}>
                <li>Customer: {this.props.customers.username}</li>
                <li>Products: {this.props.products.name}</li>
                <li>Payment: {this.props.paymentTypes.payment_name}</li>
              </ul>
              </Card.Description>

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
          </Card.Content>
        </Card>
    );
  }
}
