import React, { Component } from "react";
import Nav from "../subcomponents/Nav/index";
import Jumbotron from "../subcomponents/Jumbotron/index";
import SearchBar from "../subcomponents/SearchBar/index";
import "./style.css";

class Header extends Component {
  state = {
    page: 'home'
  };
  render() {
    return (
      <div>
        <header className="d-flex flex-column justify-content-around py-2 ui_gradient2">
          <Nav />
          <Jumbotron />
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default Header;
