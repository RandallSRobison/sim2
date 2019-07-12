import React, { Component } from "react";

export default class House extends Component {
  render() {
    return (
      <div className="house-container">
        <p>{this.props.house.name}</p>
        <p>{this.props.house.address}</p>
        <p>{this.props.house.city}</p>
        <p>{this.props.house.state}</p>
        <p>{this.props.house.zipcode}</p>
        <button>Delete</button>
      </div>
    );
  }
}
