import React from "react";
import "./style.css";
import { Collapsible } from "react-materialize";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/tomorrow-night-bright.css";
import { FormBtn, TextArea } from "../Form/index";

function CustomCard() {
  return (
    <div
      className="library-area"
      // key={Algorithm._id}
    >
      <Collapsible className="z-depth-0">
        <li>
          <div className="collapsible-header title-header">
            <h5 className="algo-title" name="title">
              {/* (logo) {Algorithm.title} */}
              Insert Users Custom Title here
            </h5>
            <button className="btn waves-effect waves-light delete">
              <i className="material-icons">delete_forever</i>
            </button>
          </div>
          <div className="collapsible-body">
            <div className="row">
              <div className="description-container">
                <h5>Description: </h5>
                <p className="algo-description" name="description">
                  {/* {Algorithm.description} */}
                  users own custom description here
                </p>
              </div>
              {/* Add some sort of switch from the highlighted code to editable code: */}
              <div>
                <p>Your own Custom Algorithm:</p>
                <Highlight className="Javascript answer-box">
                  {/* {Algorithm.answer} */}
                </Highlight>
                <FormBtn type="submit" name="action">
                  Edit
                  <i className="material-icons right">edit</i>
                </FormBtn>
              </div>
            </div>
            <form>
              <div className="row form-row">
                <TextArea
                  id="library-snippet"
                  name="answer"
                  placeholder="Edit your code here!"
                />
              </div>
              {/* <button
                  type="submit"
                  className="btn waves-effect waves-light"
                  name="action"
                >
                  preview
                </button> */}
              {/* <button
                  type="submit"
                  className="btn waves-effect waves-light"
                  name="action"
                >
                  edit
                </button> */}

              <FormBtn type="submit" name="action">
                Save
                <i className="material-icons right">save</i>
              </FormBtn>
            </form>
          </div>
        </li>
      </Collapsible>
    </div>
  );
}

export default CustomCard;
