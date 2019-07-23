import React, {Fragment} from 'react';

const Jumbotron = (props) => {
    return (
        <Fragment>
            <div className="container my-3- mt-4 mt-3- mt-md-n3 mt-lg-n3">
            <div className="row mb-n5-">
              <div className="col-md-4 d-flex justify-content-center align-items-center mb-n5- mb-md-0 border-danger">
                <div className="container text-center- text-right text-md-left mb-3 mb-sm-0 px-0">
                  <div className="row">
                    <div className=" mx-auto- col-4 col-md-12">
                      <h2 className="">URBIT</h2>
                    </div>
                    <div className=" mx-auto col-7 col-md-12 d-flex flex-column">
                      <p className="text-left">
                        The botanical index for herbal therapy and home remedies
                      </p>
                      <button
                        className="btn rounded-btn shadow-sm ui_btn1 text-white border-0 mx-auto- mr-auto mx-md-0 px-3 py-2 px-md-0"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-8 header_image my-2 mt-n5- mt-sm-n4-"
                style={{minHeight: 350}}
              />
            </div>
          </div>
        </Fragment>
    );
}

export default Jumbotron;