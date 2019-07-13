import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="d-flex flex-column justify-content-around py-2 ui_gradient2">
          <div className="container px-0">
            <nav className="navbar navbar-expand-lg navbar-light d-flex align-items-stretch">
              <a
                className="navbar-brand align-self-center rounded-btn shadow-sm px-3 active"
                href="#"
                style={{ color: "#43c6ac" }}
              >
                URBIT<span className="sr-only">(current)</span>
              </a>
              <button
                className="navbar-toggler border-0 shadow rounded-btn px-3"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ outline: "none" }}
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav text-center ml-lg-auto d-flex justify-content-between align-items-center">
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4"
                      href="#"
                    >
                      herbs
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4"
                      href="#"
                    >
                      forum
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4"
                      href="#"
                    >
                      about us
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4"
                      href="#"
                    >
                      blog
                    </a>
                  </li>
                  <li className="nav-item  mx-1">
                    <a
                      className="nav-link btn btn-light rounded-btn mb-3 my-lg-2 px-4 px-md-4 shadow"
                      href="#"
                    >
                      log in
                    </a>
                  </li>
                  <li className="nav-item mx-0 ml-lg-3">
                    <a
                      className="nav-link btn ui_btn2 border-0 my-lg-2 text-white rounded-btn px-4 shadow"
                      href="#"
                    >
                      subscribe
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="container mt-4 mt-3- mt-md-n5 mt-lg-n3">
            <div className="row mb-n5-">
              <div className="col-md-4 d-flex justify-content-center align-items-center mb-n5- mb-md-0 border-danger">
                <div className="container text-center- text-right text-md-left mb-3 mb-sm-0 px-0">
                  <div className="row">
                    <div className="col-6 col-md-12">
                      <h2>Welcome to URBIT</h2>
                    </div>
                    <div className="col-6 col-md-12 d-flex flex-column">
                      <p className="text-left">
                      A hub for alternative health solutions and metaphysical healing
                      </p>
                      <a
                        href="#"
                        className="btn rounded-btn shadow-sm ui_btn1 text-white border-0 mx-auto- mr-auto mx-md-0 px-3 py-2 px-md-0"
                      >
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-8 header_image mt-n5- mt-sm-n4-"
                style={{minHeight: 350}}
              />
            </div>
          </div>

          <div className="container">
            <div
              className="input-group mb-2 shadow-sm rounded-btn overflow-hidden border-0"
              style={{ outline: "none" }}
            >
              <input
                type="text"
                className="form-control border-0 px-4"
                aria-label="Text input with segmented search button"
                style={{ outline: "none", color: "#408468", lineHeight: 10 }}
              />
              <div className="input-group-append">
                <a className="btn ui_btn2 border-0 text-white">
                  <i className="fas fa-search px-4" />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
