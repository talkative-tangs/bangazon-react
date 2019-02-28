import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Orders extends Component {

  pay = () => {
    if (this.props.payment[0] !== undefined) {
      return this.props.payment[0].payment_name
    }
  }

  productmap = () => {
    let productArray = ""
    console.log('blah', this.props.products)
    if (this.props.products.length > 0) {
      console.log('im here')
      productArray = this.props.products.map(product => {     
        return <li key={product.id}>{product[0].name}</li> 
    })
    }
    return productArray
  }




  render() {
    return (
        <Card key={this.props.order.id} className="card">
          <Card.Content>
            <div className="card-body">
              <div className="card-title">
              <Card.Header textAlign="center">Order #{this.props.order.id}</Card.Header>
              <Card.Meta textAlign="center">{this.props.customer[0].username}</Card.Meta>
              <Card.Description>
              <ul style={{listStyleType: "none"}}>
                <li>payment: {this.pay()}</li><br />
                <li>products:
                  <ul>{this.productmap()}</ul>
                </li>
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
