import React, { Component } from "react";

export default class Home extends Component {
  render() {
    
    return (
        <div>
          <h1>Landing Page</h1>
          <br/>
          <a href='http://localhost:3000/admin'>Admin</a>
          <br/>
          <a href='http://localhost:3000/ecommerce'>E-Commerce</a>
        </div>
    );
  }
}