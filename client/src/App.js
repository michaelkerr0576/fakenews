import React, { Component } from "react";

//Importiong Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
