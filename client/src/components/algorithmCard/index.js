import React from "react";
import "./style.css";
import { Collapsible } from "react-materialize";

function AlgorithmCard() {
  return (
    <div className="library-area">
      <Collapsible className="z-depth-0">
        <li>
          <div class="collapsible-header">
            <i class="material-icons">filter_drama</i>Title:
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </Collapsible>
    </div>
  );
}

export default AlgorithmCard;
