import React from "react";
import Sidenav from "../components/sidenav";
// import Container from "../components/container";
// import { getFromStorage } from "../utils/storage";
import AlgorithmCard from "../components/algorithmCard";

class Library extends React.Component {
  state = {
    algorithms: []
  };

  // componentDidMount(){
  //   this.loadAlgorithms();
  // }

  // loadAlgorithms = () => {
  //   getFromStorage.getFromStorage()
  //   .then(res => this.setState({ algorithms: res.data }))
  //   .catch(err => console.log(err));
  // };

  render() {
    return (
      <div class="row">
        <div class="col s12 m4 l3">
          <Sidenav />
        </div>

        <div class="col s12 m8 l9">
          <h3>Algorithms</h3>
          <br />
          {this.state.algorithms.length ? (
            <list>
              {this.state.books.map(algorithm => (
                <AlgorithmCard key={algorithm.id} />
              ))}
            </list>
          ) : (
            <h4>No Results to Display</h4>
          )}
          <AlgorithmCard />
        </div>
      </div>
    );
  }
}

export default Library;
