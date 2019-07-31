import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Welcome from "./pages/userwelcome";
import Library from "./pages/mainlibrary";
import Dashboard from "./pages/dashboard";
// import Search from "./pages/search";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Route exact path="/" component={Home} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/dashboard" component={Dashboard} />
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
