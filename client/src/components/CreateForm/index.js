import React from "react";
import "./style.css";

function CreateForm(props) {
  return (
    <div className="form-container">
      <form className="form-area col s11">
        <div className="row form-row">
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              onChange={props.handleInputChange}
            />
            <label for="textarea1">Title</label>
          </div>
        </div>
        <div className="row form-row">
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea" />
            <label for="textarea1">Description</label>
          </div>
        </div>
        <div className="row form-row">
          <div className="input-field col s12">
            <textarea id="textarea1" className="textarea snippet-box" />
            <label for="textarea1">Create Algorithm here!</label>
          </div>
        </div>
        <div className="row form-row">
          <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn waves-effect waves-light"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
