import React from "react";
import "./style.css";
import { TextInput } from "react-materialize";

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: true, isRegister: false };
  }

  showLoginForm() {
    this.setState({ isLogin: true, isRegister: false });
  }

  showRegisterForm() {
    this.setState({ isRegister: true, isLogin: false });
  }

  render() {
    return (
      <div className="login-container">
        <div className="box-controller">
          <div className="controller" onClick={this.showLoginForm.bind(this)}>
            Login
          </div>
          <div
            className="controller"
            onClick={this.showRegisterForm.bind(this)}
          >
            Register
          </div>
        </div>
        <div className="input-container">
          {this.state.isLogin && <LoginForm />}
          {this.state.isRegister && <RegisterForm />}
        </div>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="box-header">Login</div>
        <div className="box">
          <div className="input-group">
            <TextInput label="Email" type="email" name="email" value="" />
            {/* <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your email"
              value=""
            /> */}
          </div>
          <div className="input-group">
            <TextInput
              label="Password"
              type="password"
              name="password"
              value=""
            />
            {/* <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="your password"
              value=""
            /> */}
            <button
              type="button"
              className="btn waves-effect waves-light light-blue darken-2"
              onClick={this.submitLogin.bind(this)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegistration(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="box-header">Register</div>
        <div className="box">
          <div className="input-group">
            <TextInput
              label="First Name"
              type="text"
              name="first-name"
              value=""
            />
            {/* <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              value=""
            /> */}
          </div>
          <div className="input-group">
            <TextInput
              label="Last Name"
              type="text"
              name="last-name"
              value=""
            />
            {/* <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              value=""
            /> */}
          </div>
          <div className="input-group">
            <TextInput label="Email" type="email" name="email" value="" />
            {/* <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your email"
              value=""
            /> */}
          </div>
          <div className="input-group">
            <TextInput
              label="Password"
              type="password"
              name="password"
              value=""
            />
            {/* <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="your password"
              value=""
            /> */}
            <button
              type="button"
              className="btn waves-effect waves-light light-blue darken-2"
              onClick={this.submitRegistration.bind(this)}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// function LoginForm() {
//   return (
//     <div className="login-form">
//       <h4 className="header">AlgoLingo Logo</h4>

//       <span className="card-title">
//         <h6 className="header">Please Sign in</h6>
//       </span>
//       <form>
//         <div className="input-field">
//           <i className="material-icons prefix">person</i>
//           <input type="text" id="userId" className="validate" />
//           <label for="userId">User Id</label>
//         </div>

//         <div className="input-field password-div">
//           <i className="material-icons prefix">lock_outline</i>
//           <input id="password" type="password" className="validate" />
//           <label for="password">Password</label>
//         </div>

//         <div className="card-action">
//           <button
//             className="btn waves-effect waves-light light-blue darken-2"
//             type="submit"
//             name="action"
//             id="login-submit"
//           >
//             Login
//           </button>
//         </div>
//         <div class="card-action">
//           <h6>
//             New to our site?{" "}
//             <a class="modal-trigger" href="#registerModal">
//               REGISTER HERE
//             </a>
//           </h6>
//         </div>
//       </form>
//     </div>
//   );
// }

export default LoginRegister;
