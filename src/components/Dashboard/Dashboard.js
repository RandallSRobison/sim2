import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
        .catch(err => {
            console.log('error in getting all houses', err);
        })
    }

  render() {
      const allHouses = this.state.houses.length ? (
          this.state.houses.map(house => (
              <House house={ house } key={ house.id } />
          ))
      ) : (
          <h2> Oopsie! We couldn't find any houses! What could have happened to them?</h2>
      )
    return (
      <div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        {allHouses}
      </div>
    );
  }
}
