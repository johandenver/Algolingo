import React from "react";
import Sidenav from "../components/sidenav";
import API from "../utils/API";
// import Container from "../components/container";
// import { getFromStorage } from "../utils/storage";
import AlgorithmCard from "../components/algorithmCard";

class Library extends React.Component {
  state = {
    algorithms: []
  };

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
    return (
      <div className="row">
        <div className="col s12 m4 l3">
          <Sidenav />
        </div>

        <div className="col s12 m8 l9">
          <div className="algo-container">
            <h3>Algorithms</h3>
            <br />
            {this.state.algorithms.length ? (
              <ul>{this.state.algorithms.map(AlgorithmCard)}</ul>
            ) : (
              <h4>No Results to Display</h4>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
