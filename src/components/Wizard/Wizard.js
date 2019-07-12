import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      houses: [],
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.addHouse = this.addHouse.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addHouse() {
    console.log("hit add house in Wizard");
    const { name, address, city, state, zipcode } = this.state;
    axios.post("/api/house", {
      name,
      address,
      city,
      state,
      zipcode
    });
  }

  render() {
    const { name, address, city, state, zipcode } = this.state;
    return (
      <div>
        <form>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={this.handleInput}
          />
          <input
            name="address"
            type="text"
            value={address}
            placeholder="Address"
            onChange={this.handleInput}
          />
          <input
            name="city"
            type="text"
            value={city}
            placeholder="City"
            onChange={this.handleInput}
          />
          <input
            name="state"
            type="text"
            value={state}
            placeholder="State"
            onChange={this.handleInput}
          />
          <input
            name="zipcode"
            type="text"
            value={zipcode}
            placeholder="Zipcode"
            onChange={this.handleInput}
          />
          <Link to='/'>
            <button onClick={this.addHouse}>Complete</button>
          </Link>
        </form>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
