import React from "react";
import { Link } from "react-router-dom";
import Sidenav from "../components/sidenav";
// import API from "../utils/API";
import logo2 from "../images/AlgoLingo2.png";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("our state is", this.state);
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
              <h2>Hello {this.props.firstName}, Welcome to AlgoLingo!</h2>
            </div>
            <br />
            <div>
              <i>
                "Perhaps the most important principle for the good algorithm
                designer is to refuse to be content." ― Alfred V. Aho
              </i>
            </div>
            <div>
              <p>
                Algorithms are much more than just a a procedure for solving
                mathematical problems. In programming Algorithms are most often
                used to help in solving problems or accomplishing some desired
                outcome.
              </p>
              <p>
                AlgoLingo's library of Javascript Algorithms provides various
                scenarious for you to solve. You will be able to save your
                Algorithm Solutions to your Dashboard, as well as create your
                own Algorithms.
              </p>
            </div>
            <div className="button-container">
              <div>
                <Link to="/library">
                  <button className="waves-effect waves-light btn-large welcome-buttons">
                    <i className="material-icons right">library_books</i>Go to
                    the AlgoLibrary
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/dashboard">
                  <button className="waves-effect waves-light btn-large welcome-buttons">
                    <i className="material-icons right">person</i>Go to your
                    Dashboard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
