import React from "react";
import Sidenav from "../components/sidenav";
import CreateForm from "../components/CreateForm";

function Create() {
    return (
      
        <div className="row">

            <div className="col s3">
                <Sidenav />
            </div>

            <div className="col s9">
                <div className="container">
                <CreateForm />
                </div>
                
            </div>
        </div>
    );
}

export default Create;