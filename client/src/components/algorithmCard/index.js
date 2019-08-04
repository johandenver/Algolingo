import React from "react";
import "./style.css";
import { Collapsible } from "react-materialize";

function AlgorithmCard() {
  return (
    <div className="library-area">
      <Collapsible className="z-depth-0">
        <li>
          <div className="collapsible-header">
            <i className="material-icons">filter_drama</i>Algorithm Title:
          </div>
          <div className="collapsible-body">
            <h3>Description: </h3>
            <p>
              Switch stoked frozen chicken heads north shore hammer chain suck
              bowl huck titanium snake bite Ski poaching. Trucks scream taco
              mitt, chillax Whistler chain suck back country steed tele free
              ride stoked skid lid twister. Stoked dope over the bars hardtail
              manny rig. Punter misty 360 tele reverse camber. Grunt carve
              piste, dirtbag death cookies first tracks bunny slope heli dust on
              crust. Hardtail first tracks carbon, chain suck face shots over
              the bars grip tape presta dope moguls phat beater endo Skate. Berm
              travel bomb yard sale phat.
            </p>
            <textarea className="library-snippet" />
            <Collapsible>
              <li>
                <div className="collapsible-header">Click for a Solution!</div>
                <div className="collapsible-body">
                  <span>The best answer ever!!</span>
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
