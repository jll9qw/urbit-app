import React from 'react';
import $ from 'jquery';

// Functions...
const handleSearch = _=> {
  const query = $('#searchBarInput').val().trim();
  console.log('Searching for: ', query);
}

const SearchBar = (props) => {
    return (
        <div>
            <div className="container">
            <div
              className="input-group mb-2 shadow-sm rounded-btn overflow-hidden border-0"
              style={{ outline: "none" }}
            >
              <input
                type="text"
                className="form-control border-0 px-4"
                id='searchBarInput'
                aria-label="Text input with segmented search button"
                style={{ outline: "none", color: "#408468", lineHeight: 10 }}
              />
              <div className="input-group-append">
                <a className="btn ui_btn2 border-0 text-white"
                onClick={_=> handleSearch()}
                >
                  <i className="fas fa-search px-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default SearchBar;