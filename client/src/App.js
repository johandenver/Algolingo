import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Welcome from "./pages/userwelcome";
import Library from "./pages/mainlibrary";
import Dashboard from "./pages/dashboard";
import Create from "./pages/create";
import API from "./utils/API";
// import ProtectedRoute from "./components/protectedRoute";
// import Login from "./components/Login";
// import Search from "./pages/search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      token: "",
      userId: "",
      firstName: ""
    };
  }

  login = input => {
    this.setState({ loggedIn: input });
  };

  componentDidMount() {
    this.getToken();
  }

  getToken = () => {
    var value = localStorage.getItem("the_main_app");
    var decoded = JSON.parse(value);
    var userToken = decoded.token;

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

  saveUserAlgorithm = algorithm => {
    API.showSaved(this.state.userId, algorithm)
      .then(() => {
        // redirect somewhere
        console.log("it worked");
      })
      .catch(err => console.error("bad", err));
  };

  render() {
    return (
      <div id="page">
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Home {...props} loggedIn={this.login} />}
              />
              <Route
                path="/welcome"
                loggedIn={this.state.loggedIn}
                component={Welcome}
              />
              <Route
                path="/library"
                loggedIn={this.state.loggedIn}
                render={props => (
                  <Library
                    {...props}
                    saveUserAlgorithm={this.saveUserAlgorithm}
                  />
                )}
              />
              <Route
                path="/dashboard"
                loggedIn={this.state.loggedIn}
                component={Dashboard}
              />
              <Route
                path="/create"
                loggedIn={this.state.loggedIn}
                component={Create}
              />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
    );
  }
}

export default App;
