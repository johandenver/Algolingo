import React from "react";
// import HomeLogin from "../components/Home";
import LoginRegister from "../components/LoginForm";
// import sample from "../images/sample.png";

function Home() {
  return (
    <div className="row">
      <div className="col s12 m12 l12">
        <div id="login-column">
          <LoginRegister />
        </div>
      </div>
    </div>
  );
}

export default Home;
