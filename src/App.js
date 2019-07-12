import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Routes from "./routes";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

export default App;
