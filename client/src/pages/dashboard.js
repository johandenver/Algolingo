import React from "react";
import Sidenav from "../components/sidenav";
import SavedCard from "../components/savedCard";
import CustomCard from "../components/CustomCard";

class Dashboard extends React.Component {
  state = {
    savedAlgorithms: [],
    userCreated: []
  };

  componentDidMount() {}

  render() {
    return (
      <div class="row">
        <div class="col s12 m4 l3">
          <Sidenav />
        </div>

        <div class="col s12 m8 l9">
          <div className="algo-container">
            <h3>(Username's) Dashboard!</h3>

            <div className="dashboard-container">
              <h3>(logo)Your Saved Algorithms</h3>
              {this.state.savedAlgorithms.length ? (
                <ul>{this.state.savedAlgorithms.map()}</ul>
              ) : (
                <h4>No Results to Display</h4>
              )}
              <SavedCard />
            </div>

            <div className="dashboard-container">
              <h3> (logo) Custom Algorithm Library:</h3>
              {this.state.userCreated.length ? (
                <ul>{this.state.userCreated.map()}</ul>
              ) : (
                <h4>No Results to Display</h4>
              )}
              <CustomCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
