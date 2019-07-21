import React, { Component, Fragment } from "react";

class Post extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <form className="col-8 mx-auto border round_corner p-5 shadow text-right">
          <div className="form-group">
            <input
              type="text"
              className="form-control round_corner p-3 shadow-sm border-0 bg-light"
              id="titleInputP"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control round_corner p-3 shadow-sm border-0 bg-light"
              id="commentInputP"
              rows="3"
              placeholder="Share your thoughts on this herb..."
              style={{minHeight: 80, maxHeight: 300}}
            />
          </div>
          <button
            type="submit"
            className="btn ui_btn1 border-0 rounded-btn text-light shadow-sm"
          >
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Post;
