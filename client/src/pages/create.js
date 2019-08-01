import React from "react";
import Sidenav from "../components/sidenav";
import CreateForm from "../components/CreateForm";
import Container from "../components/container";

function Create() {
    return (
      
        <div className="row">

            <div className="col s12 m4 l3">
                <Sidenav />
            </div>

            <div className="col s12 m8 l9">
                <Container style={{marginTop: 15}}>
                    <CreateForm />
                </Container>
            </div>
                
        </div>
        
    );
}

export default Create;