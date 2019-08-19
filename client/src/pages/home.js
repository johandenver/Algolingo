import React from "react";
// import HomeLogin from "../components/Home";
import LoginRegister from "../components/LoginForm";
// import sample from "../images/sample.png";

function Home() {
  return (
    <div className="row">
      {/* <div className="col s12 m4 l6">
        <div className="container">
          <div className="card" id="intro-card">
            <h2>Welcome to AlgoLingo</h2>
            <div className="img-container">
              <img className="img-to-fit" src={sample} alt="sample" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="col s12 m12 l12">
        <div id="login-column">
          <LoginRegister />
        </div>
      </div>
    </div>
  );
}

export default Home;
