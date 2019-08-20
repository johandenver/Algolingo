import React from "react";
import Sidenav from "../components/sidenav";
import API from "../utils/API";
// import Container from "../components/container";
// import { getFromStorage } from "../utils/storage";
import AlgorithmCard from "../components/algorithmCard";
import logo2 from "../images/AlgoLingo2.png";

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
            <div className="library-header">
              <h3> Algorithms</h3>
            </div>
            <p>
              Cornice T-bar endo, poaching dust on crust clipless McTwist scream
              couloir dope hardtail. Grind clean rigid titanium, poaching huck
              chain suck hurl carcass frozen chicken heads T-bar huckfest fatty
              pinner BB. Sucker hole schwag schwag ripper bro travel, dope
              huckfest. Skinny corn wack clipless bomb hole poaching Skate
              pillow popping avie cruiser face plant presta. Skid lid bonk
              hammer frozen chicken heads, grom 180 taco trucks japan air butter
              heli corduroy spread eagle glades.
            </p>

            {this.state.algorithms.length ? (
              <ul>{this.state.algorithms.map(AlgorithmCard)}</ul>
            ) : (
              <h4>No Results at this time!</h4>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
