import React, { Component } from 'react';
import './stylesheets/App.css';

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
