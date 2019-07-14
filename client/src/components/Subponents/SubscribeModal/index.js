import React from "react";
import $ from "jquery";

// Functions...
const handleSubmit = _ => {
  const name = [
      $("#firstNameInputSM")
        .val()
        .trim(),
      $("#lastNameInputSM")
        .val()
        .trim()
    ],
    email = $("#emailInputSM")
      .val()
      .trim(),
    password = $("#passwordInputSM")
      .val()
      .trim(),
    remember = $("#rememberMeSM").is(":checked");
  // test log...
  console.log(name, email, password, remember);
  // reset form(s)...
  $("#firstNameInputSM").val('');
  $("#lastNameInputSM").val('');
  $("#emailInputSM").val('');
  $("#passwordInputSM").val('');
  $("#rememberMeSM").prop('checked', false);
};

const Modal = props => {
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="subscribeModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="subscribeModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content ui_gradient3 border-0 round_corner shadow">
            <div
              className="modal-body p-5 text-white"
              style={{
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
              }}
            >
              <form>
                <div className="form-group">
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="firstNameInputSM">First Name</label>
                      <input
                        type="text"
                        className="form-control rounded-btn shadow-sm"
                        id="firstNameInputSM"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="lastNameInputSM">Last Name</label>
                      <input
                        type="text"
                        className="form-control rounded-btn shadow-sm"
                        id="lastNameInputSM"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <label htmlFor="emailInputSM">Email address</label>
                  <input
                    type="email"
                    className="form-control rounded-btn shadow-sm"
                    id="emailInputSM"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-white">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInputSM">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-btn shadow-sm"
                    id="passwordInputSM"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input round_corner p-2"
                    id="rememberMeSM"
                  />
                  <label className="form-check-label" htmlFor="rememberMeSM">
                    <small className="form-text text-white">Remember me</small>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn rounded-btn border-0 ui_gradient2 shadow-sm"
                  id="logInSubmit"
                  onClick={_ => {
                    handleSubmit();
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
