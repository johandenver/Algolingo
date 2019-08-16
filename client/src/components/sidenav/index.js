import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { getFromStorage } from "../../utils/storage";

// function Sidenav() {
//   return (
//     <div className="side-nav">
//       <ul>
//         <li className="menu-item">
//           <Link
//             to="/library"
//             className={
//               window.location.pathname === "/library"
//                 ? "nav-link active"
//                 : "nav-link"
//             }
//           >
//             <i className="material-icons">library_books</i>Main Library
//           </Link>
//         </li>
//         <li>
//           <div className="divider" />
//         </li>
//         <li className="menu-item">
//           <Link
//             to="/dashboard"
//             className={
//               window.location.pathname === "/dashboard"
//                 ? "nav-link active"
//                 : "nav-link"
//             }
//           >
//             <i className="material-icons">person</i>Your Dashboard
//           </Link>
//         </li>
//         <li>
//           <div className="divider" />
//         </li>
//         <li className="menu-item">
//           <Link
//             to="/create"
//             className={
//               window.location.pathname === "/create"
//                 ? "nav-link active"
//                 : "nav-link"
//             }
//           >
//             <i className="material-icons">library_add</i>Create Algorithm
//           </Link>
//         </li>
//         <li>
//           <div className="divider" />
//         </li>
//         <li className="menu-item">
//           <Link
//             to="/"
//             className={
//               window.location.pathname === "/" ? "nav-link active" : "nav-link"
//             }
//           >
//             <i className="material-icons">exit_to_app</i>Logout
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

class Sidenav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: ""
    };

    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");
    /*/change this name to the name of our app/*/

    if (obj && obj.token) {
      const { token } = obj;
      // verify token

      fetch("/api/account/verify?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  logOut() {
    this.setState({
      isLoading: true
    });
    const obj = getFromStorage("the_main_app");
    /*/change this name to the name of our app/*/

    if (obj && obj.token) {
      const { token } = obj;
      // verify token

      fetch("/api/account/logout?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: "",
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    return (
      <div className="side-nav">
        <ul>
          <li className="menu-item" id="welcome-menu">
            <Link
              to="/welcome"
              className={
                window.location.pathname === "/welcome"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Welcome to AlgoLingo
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li className="menu-item">
            <Link
              to="/library"
              className={
                window.location.pathname === "/library"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <i className="material-icons">library_books</i>AlgoLibrary
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li className="menu-item">
            <Link
              to="/dashboard"
              className={
                window.location.pathname === "/dashboard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <i className="material-icons">person</i>Your Dashboard
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li className="menu-item">
            <Link
              to="/create"
              className={
                window.location.pathname === "/create"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <i className="material-icons">library_add</i>Create Custom
              Algorithm
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li className="menu-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={this.logOut}
            >
              <i className="material-icons">exit_to_app</i>Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;
