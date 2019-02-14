import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                noValidate
                className=""
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                noValidate
                className=""
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                noValidate
                className=""
                name="email"
                placeholder="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                password
                noValidate
                className=""
                name="password"
                placeholder="password"
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
