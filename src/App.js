import React, { Fragment, Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Useritems from "./components/users/Useritems";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Useritems />
      </Fragment>
    );
  }
}

export default App;
