import React from "react";
import Sidenav from "../components/sidenav";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Container from "../components/container";
// import { getFromStorage } from "../utils/storage";
import AlgorithmCard from "../components/algorithmCard";
import logo2 from "../images/AlgoLingo2.png";

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithms: []
    };
  }

  componentDidMount() {
    this.loadAlgorithms();
    // do an ajax call sending the localStorage.getItem('token');
    // if the user in not authorized, then do a redirect to sign.
  }

  loadAlgorithms = () => {
    API.getAlgorithms()
      .then(res => this.setState({ algorithms: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    // console.log("Welcome Page state is", this.state);
    // console.log(this.props);
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
              <h2> AlgoLingo Algorithms</h2>
            </div>
            <div>
              <p>
                Welcome to the AlgoLibrary. The library contains a list of
                Javascript Algorithm Challenges.
              </p>
              <p>
                Please select an Algorithm below for you to solve and save to
                your Dashboard. If you get stuck, feel free to click on the
                provided solution, but do note there are many ways to solve for
                the desired result. Is your answer different than ours?
              </p>
            </div>
            <h4>AlgoLibrary:</h4>

            {this.state.algorithms.length ? (
              <ul>
                {this.state.algorithms.map(algorithm => (
                  <AlgorithmCard
                    key={algorithm._id}
                    algorithm={algorithm}
                    saveUserAlgorithm={this.props.saveUserAlgorithm}
                  />
                ))}
              </ul>
            ) : (
              <h4>No Results at this time!</h4>
            )}

            {/* <div>
              <Link to="/dashboard">
                <button className="waves-effect waves-light btn-large">
                  <i className="material-icons right">person</i>Go to your
                  Dashboard
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
