import React, { Component } from "react";
import { fire, db } from "../../config/fbConfig";
// import firebase from "firebase/app";
import "firebase/database";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  //   app = firebase.initializeApp(DB_CONFIG);
  //   db = app
  //     .database()
  //     .ref()
  //     .child("notes");

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        db.collection("users").add({
          email: this.state.email,
          name: this.state.name,
          password: this.state.password,
          anything: "heelo"
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.onSubmit}>
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="input-field">
            <label htmlFor="name">name</label>
            <input type="text" name="name" onChange={this.changeHandler} />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={this.changeHandler} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.changeHandler}
            />
          </div>

          <div className="input-field">
            <button type="submit" className="btn blue lighten-1 z-depth-0">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
