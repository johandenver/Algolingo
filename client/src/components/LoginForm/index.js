import React from "react";
import "./style.css";

function LoginForm() {
  return (
    <div className="login-form">
      <h4 className="header">AlgoLingo Logo</h4>

      <span className="card-title">
        <h6 className="header">Please Sign in</h6>
      </span>
      <form>
        <div className="input-field">
          <i className="material-icons prefix">person</i>
          <input type="text" id="userId" className="validate" />
          <label for="userId">User Id</label>
        </div>

        <div className="input-field password-div">
          <i className="material-icons prefix">lock_outline</i>
          <input id="password" type="password" className="validate" />
          <label for="password">Password</label>
        </div>

        <div className="card-action">
          <button
            className="btn waves-effect waves-light light-blue darken-2"
            type="submit"
            name="action"
            id="login-submit"
          >
            Login
          </button>
        </div>
        <div class="card-action">
          <h6>
            New to our site?{" "}
            <a class="modal-trigger" href="#registerModal">
              REGISTER HERE
            </a>
          </h6>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
