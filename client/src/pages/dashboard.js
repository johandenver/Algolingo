import React from "react";
import Sidenav from "../components/sidenav";
import SavedCard from "../components/savedCard";
import CustomCard from "../components/CustomCard";
import API from "../utils/API";
import logo2 from "../images/AlgoLingo2.png";

class Dashboard extends React.Component {
  state = {
    savedAlgorithms: [],
    userCreated: []
  };

  componentDidMount() {
    this.loadSavedAlgorithms();
  }

  loadSavedAlgorithms = id => {
    API.getUser(id)
      .then(res => {
        // console.log(res);
        if (res.data) {
          this.setState({
            savedAlgorithms: res.data
          });
        }
      })
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
            <h3>(Username's) Dashboard!</h3>

            <div className="dashboard-container">
              <div className="library-header">
                <img
                  className="logo2"
                  src={logo2}
                  height="auto"
                  width="100"
                  alt="AlgoLingo"
                />
                <h2>Saved Algorithms:</h2>
              </div>
              {this.state.savedAlgorithms.length ? (
                <ul>{this.state.savedAlgorithms.map(SavedCard)}</ul>
              ) : (
                <h4>No Results to Display</h4>
              )}
              <SavedCard />
            </div>

            <div className="dashboard-container">
              <div className="library-header">
                <img
                  className="logo2"
                  src={logo2}
                  height="auto"
                  width="100"
                  alt="AlgoLingo"
                />
                <h2>Custom Algorithms:</h2>
              </div>

              {this.state.userCreated.length ? (
                <ul>{this.state.userCreated.map()}</ul>
              ) : (
                <h5>You have not yet created any Custom Algoritms</h5>
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
