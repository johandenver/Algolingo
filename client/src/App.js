import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Welcome from "./pages/userwelcome";
import Library from "./pages/mainlibrary";
import Dashboard from "./pages/dashboard";
import Create from "./pages/create";

// import Search from "./pages/search";

function App() {
  return (
    <div id="page">
      <Router>
        <Navbar />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create" component={Create} />
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
