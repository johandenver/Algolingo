import React from "react";
import "./style.css";
import { Collapsible } from "react-materialize";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/tomorrow-night-bright.css";
// import storage from "../../utils/storage"

function AlgorithmCard() {
  return (
    <div className="library-area">
      <Collapsible className="z-depth-0">
        <li>
          <div className="collapsible-header">
            <h4>FizzBuzz</h4>
          </div>
          <div className="collapsible-body">
            <div className="row">
              <h5>Description: </h5>
              <p>
                Write a short program that prints each number from 1 to 100 on a
                new line. For each multiple of 3, print 'Fizz' instead of the
                number. For each multiple of 5, print 'Buzz' instead of the
                number. For numbers which are multiples of both 3 and 5, print
                'FizzBuzz' instead of the number.
              </p>
            </div>
            <div className="row form-row">
              <textarea className="library-snippet" />
            </div>
            <button
              type="submit"
              className="btn waves-effect waves-light"
              name="action"
            >
              preview
            </button>
            <button
              type="submit"
              className="btn waves-effect waves-light"
              name="action"
            >
              edit
            </button>
            <button
              type="submit"
              className="btn waves-effect waves-light"
              name="action"
            >
              Save to Dashboard
              <i className="material-icons right">send</i>
            </button>
            <Collapsible>
              <li>
                <div className="collapsible-header answer-title">
                  <h5>Click here for one Solution!</h5>
                </div>
                <div className="collapsible-body answer-body">
                  <div>
                    <Highlight className="Javascript answer-box">
                      {`for (var i=1; i < 101; i++){
                  if (i % 15 == 0) console.log("FizzBuzz");
                  else if (i % 3 == 0) console.log("Fizz");
                  else if (i % 5 == 0) console.log("Buzz");
                  else console.log(i);
                  }`}
                    </Highlight>
                  </div>
                </div>
              </li>
            </Collapsible>
          </div>
        </li>
      </Collapsible>
    </div>
  );
}

export default AlgorithmCard;
