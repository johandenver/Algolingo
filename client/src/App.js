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
// import ProtectedRoute from "./components/protectedRoute";

// import Login from "./components/Login";

// import Search from "./pages/search";

class App extends React.Component {
  state = {
    loggedIn: false
  };

  login = input => {
    this.setState({ loggedIn: input });
  };

  render() {
    return (
      <div id="page">
        <Router>
          <Navbar />
          <main>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route
                exact
                path="/"
                render={props => <Home {...props} loggedIn={this.login} />}
              />
              {/* <ProtectedRoute
                path="/welcome"
                loggedIn={this.state.loggedIn}
                component={Welcome}
              />
              <ProtectedRoute
                path="/library"
                loggedIn={this.state.loggedIn}
                component={Library}
              />
              <ProtectedRoute
                path="/dashboard"
                loggedIn={this.state.loggedIn}
                component={Dashboard}
              />
              <ProtectedRoute
                path="/create"
                loggedIn={this.state.loggedIn}
                component={Create}
              /> */}
              <Route
                path="/welcome"
                loggedIn={this.state.loggedIn}
                component={Welcome}
              />
              <Route
                path="/library"
                loggedIn={this.state.loggedIn}
                component={Library}
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
