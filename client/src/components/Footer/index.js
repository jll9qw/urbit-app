import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer className="d-flex justify-content-center py-2 py-md-2 ui_gradient2">
          <div className="container px-0 d-flex flex-column justify-content-center py-2">
            <ul className="nav flex-column flex-md-row justify-content-center align-items-center px-0">
              <li className="nav-item mb-3 mb-md-0">
                <button
                  className="nav-link align-self-center rounded-btn shadow-sm px-3 active"
                  style={{ color: "#43c6ac" }}
                >
                  hrbs
                </button>
              </li>
              <li className="nav-item mb-3 mb-md-0">
                <button className="nav-link disabled text-light bg-transparent border-0">
                  &copy;2019 MaurJaso
                </button>
              </li>
              <li className="nav-item mb-3 mb-md-0" />
              <li className="nav-item d-flex w-25- mb-3 mb-md-0 justify-content-center">
                <button className="btn-light- btn-white rounded-btn my-lg-2 p-2 shadow text-pinkish">
                  <i className="fab fa-twitter" />
                </button>
                <button className="btn-light- btn-white rounded-btn mx-3 my-lg-2 p-2 shadow text-pinkish">
                  <i className="fab fa-facebook" />
                </button>
                <button className="btn-light- btn-white rounded-btn my-lg-2 p-2 shadow text-pinkish">
                  <i className="fab fa-instagram" />
                </button>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
