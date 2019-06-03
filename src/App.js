import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import GameDetails from "./components/gamesList/GameDetails";
import Login from "./components/userAuth/Login";
import Register from "./components/userAuth/Register";
import { fire } from "./config/fbConfig";
import firebase from "firebase/app";
import "firebase/database";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route path="/game/:id" render={() => <GameDetails />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
