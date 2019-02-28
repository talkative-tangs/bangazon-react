import React, { Component } from 'react';
import ApplicationViews from "./components/ApplicationViews"
import NavBar from "./components/navbar/NavBar"

export default class App extends Component {
  render() {
      return (
          <React.Fragment>
              <NavBar />
                <ApplicationViews />
          </React.Fragment>
      )
  }
}
