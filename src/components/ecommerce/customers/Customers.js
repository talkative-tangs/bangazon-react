import React, { Component } from "react"

export default class Customers extends Component {
    render() {
        return (
            <section className="customers-details">
                <div key={this.props.customer.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h2>{this.props.customer.first_name} {this.props.customer.last_name}</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}