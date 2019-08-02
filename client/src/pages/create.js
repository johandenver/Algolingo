import React from "react";
import Sidenav from "../components/sidenav";
import CreateForm from "../components/CreateForm";

function Create() {
  return (
    <div className="row">
      <div className="col s12 m4 l3">
        <Sidenav />
      </div>

      <div className="col s12 m8 l9">
        <CreateForm />
      </div>
    </div>
  );
}

export default Create;
