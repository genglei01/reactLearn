import React, { Component } from "react";
import "./App.css";
import Master from "./layout";

class App extends Component {
  render() {
    return (
      <Master>
        <div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Master>
    );
  }
}

export default App;
