import React from "react";
import "./style.css";
import { Modal, Button } from "react-materialize";

<Modal header="Modal Header" trigger {} id="registerModal">
  <div className="modal-content valign center" id="registerForm">
    <form className="center">
      <span className="card-title">
        <h6 className="header">Please Register</h6>
      </span>
      <small />
      <div className="input-field">
        <i className="material-icons prefix">person</i>
        <input type="text" id="input-username" className="validate" />
        <label for="userId">Your Name</label>
      </div>

      <div className="input-field userId-div">
        <i className="material-icons prefix">person_add</i>
        <input type="text" id="input-userID" className="validate" />
        <label for="input-userId">User Id</label>
      </div>

      <div className="input-field password-signup-div">
        <i className="material-icons prefix">lock_outline</i>
        <input id="input-password" type="password" className="validate" />
        <label for="input-password">Password</label>
      </div>

      <div className="card-action">
        <Botton
          className="btn waves-effect waves-light light-blue darken-2"
          type="submit"
          name="action"
          id="register-submit"
        >
          Submit
        </Botton>
      </div>
    </form>
  </div>
</Modal>;
