import React from "react";
// import HomeLogin from "../components/Home";
import LoginRegister from "../components/LoginForm";
// import sample from "../images/sample.png";

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <div id="login-column">
            <LoginRegister checkLog={this.props.checkLog} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
