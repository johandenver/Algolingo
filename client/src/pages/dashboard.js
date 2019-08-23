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
      userCreated: []
      // userId: ""
    };
  }

  // componentDidUpdate(prevProps) {
  //   console.log("ComponentDidUpdate: ", this.props.userId);

  //   // console.log(
  //   //   "user id: ",
  //   //   prevProps.userId,
  //   //   " this props:   ",
  //   //   this.props.userId
  //   // );
  //   // if (this.props.userId !== prevProps.userId) {
  //   //   // console.log(this.props.userId);
  //   //   this.loadSavedAlgorithms(this.props.userId);
  //   // }
  // }
  componentDidMount() {
    // console.log("Component did mount: ", this.props.userId);
    // if (this.props.userId) {
    this.loadSavedAlgorithms(this.props.userId);
    // }
  }

  // function to retrevie the saved algorithms with useranswers from the db to post to  savedCard in dashboard.
  loadSavedAlgorithms = userId => {
    console.log("api user id: ", userId);
    API.showAnswer(userId)

      // .then(console.log)
      // .catch(console.log);

      .then(res => {
        console.log("ShowAnswer API response:", res);
        if (res.data.length) {
          this.setState({
            savedAlgorithms: res.data
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.props.userId);
    console.log("dashboard Algo: ", this.state.savedAlgorithms);
    // console.log("state", this.state);
    return (
      <div className="row">
        <div className="col s12 m4 l3">
          <Sidenav />
        </div>

        <div className="col s12 m8 l9">
          <div className="algo-container">
            <h3>{this.props.firstName}'s Dashboard!</h3>

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
                      key={savedAlgorithm._id}
                      savedAlgorithm={savedAlgorithm}

                      // loadSavedAlgorithms={this.loadSavedAlgorithms}
                    />
                  ))}
                </ul>
              ) : (
                <p>You have not yet saved any Algorithms from the Library</p>
              )}
              {/* <p>The below card is hardcoded for styling purposes:</p>
              <SavedCard /> */}
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
