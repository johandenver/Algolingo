import React from "react";
import "./style.css";
import { Collapsible } from "react-materialize";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/tomorrow-night-bright.css";

function AlgorithmCard() {
  return (
    <div className="library-area">
      <Collapsible className="z-depth-0">
        <li>
          <div className="collapsible-header">
            <i className="material-icons">filter_drama</i>Algorithm Title:
          </div>
          <div className="collapsible-body">
            <div className="row">
              <h3>Description: </h3>
              <p>
                Switch stoked frozen chicken heads north shore hammer chain suck
                bowl huck titanium snake bite Ski poaching. Trucks scream taco
                mitt, chillax Whistler chain suck back country steed tele free
                ride stoked skid lid twister. Stoked dope over the bars hardtail
                manny rig. Punter misty 360 tele reverse camber. Grunt carve
                piste, dirtbag death cookies first tracks bunny slope heli dust
                on crust. Hardtail first tracks carbon, chain suck face shots
                over the bars grip tape presta dope moguls phat beater endo
                Skate. Berm travel bomb yard sale phat.
              </p>

              <button
                type="submit"
                className="btn waves-effect waves-light"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
            <div className="row form-row">
              <textarea className="library-snippet" />
            </div>
            <Collapsible>
              <li>
                <div className="collapsible-header">
                  Click for one Solution!
                </div>
                <div className="collapsible-body">
                  <div>
                    <Highlight className="Javascript">{`var answer = "The best answer ever!!"
                    function() {
                      if (happy) {
                        console.log(sad);
                      }
                    }`}</Highlight>
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
