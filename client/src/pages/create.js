import React from "react";
import Sidenav from "../components/sidenav";
import CreateForm from "../components/CreateForm";
import logo2 from "../images/AlgoLingo2.png";

function Create() {
  return (
    <div className="row">
      <div className="col s12 m4 l3">
        <Sidenav />
      </div>

      <div className="col s12 m8 l9">
        <div className="algo-container">
          <div className="library-header">
            <img
              className="logo2"
              src={logo2}
              height="auto"
              width="100"
              alt="AlgoLingo"
            />
            <h2>Custom Algorithm</h2>
          </div>
          <div>
            <h2>Custom Algorithm Feature is Coming Soon!</h2>
            <p>
              AlgoLingo is a great place for you to create and store your own
              Algorithms.
            </p>
            <p>
              Complete your Javascript Algorithm below and save it to your
              Dashboard. How many can you come up with?
            </p>
          </div>
          <h4>Create Custom Algorithm:</h4>

          <CreateForm />
        </div>
      </div>
    </div>
  );
}

export default Create;
