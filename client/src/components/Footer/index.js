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
                <a
                  className="nav-link align-self-center rounded-btn shadow-sm px-3 active"
                  href="#"
                  style={{ color: "#43c6ac" }}
                >
                  hrbs
                </a>
              </li>
              <li className="nav-item mb-3 mb-md-0">
                <a className="nav-link disabled text-light" href="#">
                  &copy;2019 MaurJaso
                </a>
              </li>
              <li className="nav-item mb-3 mb-md-0" />
              <li className="nav-item d-flex w-25- mb-3 mb-md-0 justify-content-center">
                <a
                  className="btn-light- btn-white rounded-btn my-lg-2 p-2 shadow text-pinkish"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn-light- btn-white rounded-btn mx-3 my-lg-2 p-2 shadow text-pinkish"
                  href="#"
                >
                  <i className="fab fa-facebook" />
                </a>
                <a
                  className="btn-light- btn-white rounded-btn my-lg-2 p-2 shadow text-pinkish"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
