import React from "react";
import Sidenav from "../components/sidenav";
import SavedCard from "../components/savedCard";
import CustomCard from "../components/CustomCard";
import API from "../utils/API";
import logo2 from "../images/AlgoLingo2.png";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedAlgorithms: [],
      userCreated: [],
      token: "",
      userId: "",
      firstName: ""
    };
  }

  componentDidMount() {
    this.getToken();
    this.loadSavedAlgorithms();
  }

  getToken = () => {
    var value = localStorage.getItem("the_main_app");
    var decoded = JSON.parse(value);
    var userToken = decoded.token;

    // console.log("getToken method:", userToken);

    API.getUserId(userToken)
      .then(res => {
        if (res.data) {
          // console.log("userId response:", res);
          this.setState({
            token: userToken,
            userId: res.data.userId
          });
          API.getUser(res.data.userId).then(res => {
            // console.log("res", res);
            this.setState({
              firstName:
                res.data.firstName.substring(0, 1).toUpperCase() +
                res.data.firstName.substring(1)
            });
          });
        }
      })
      .catch(err => console.log("userId error", err));
  };

  loadSavedAlgorithms = () => {
    // const userId = this.state.userId;
    // API.showAnswer(userId)
    // .then(res => {
    //   console.log("res", res);
    //   if (res.data) {
    //     this.setState({
    //       savedAlgorithms: res.data
    //     });
    //   }
    // })
    // .catch(err => console.log(err));
  };

  render() {
    console.log("Dashboard page state is", this.state);
    return (
      <div className="row">
        <div className="col s12 m4 l3">
          <Sidenav />
        </div>

        <div className="col s12 m8 l9">
          <div className="algo-container">
            <h3>{this.state.firstName}'s Dashboard!</h3>

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
                <ul>
                  {this.state.savedAlgorithms.map(savedAlgorithm => (
                    <SavedCard
                      savedAlgorithm={savedAlgorithm}
                      // loadSavedAlgorithms={this.loadSavedAlgorithms}
                    />
                  ))}
                </ul>
              ) : (
                <p>You have not yet saved any Algorithms from the Library</p>
              )}
              <p>The below card is hardcoded for styling purposes:</p>
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
                <p>You have not yet created any Custom Algorithms</p>
              )}
              <p>The below card is hardcoded for styling purposes:</p>
              <CustomCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
