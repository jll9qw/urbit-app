import React, { Component, Fragment } from "react";

class Comment extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div
          className="card mx-auto ml-md-3 mb-3 round_corner shadow-sm overflow-hidden border-0 w-75"
        //   style={{maxWidth: 400}}
        >
          <div className="row no-gutters">
            <div className="col-3 p-4 text-center">
              <img
                src={this.props.postData.image}
                className="card-img shadow rounded-circle"
                alt="..."
                style={{
                    minWidth: 65,
                    maxHeight: 120,
                    maxWidth: 120,
                    border: '.2em solid #ffd9a1'
                }}
              />
            </div>
            <div className="col-9">
              <div className="card-body">
                <h5 className="card-title text-center text-md-left">{this.props.postData.title}</h5>
                <hr className="ui_gradient2 p-1 border-0 round_corner" />
                <p className="card-text text-center text-md-left">{this.props.postData.comment}</p>
                <p className="card-text text-center text-md-left">
                  <small className="text-muted">{this.props.postData.name}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Comment;
