import React, { Fragment, Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users} />
      </Fragment>
    );
  }
}

export default App;
