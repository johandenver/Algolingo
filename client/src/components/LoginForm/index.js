import React from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import { TextInput } from "react-materialize";
import "whatwg-fetch";
import { getFromStorage, setInStorage } from "../../utils/storage";
import logo1 from "../../images/AlgoLingo1.png";

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: "login",
      // isLogin: true,
      // isRegister: false,
      isLoading: true,
      token: "",
      loggedIn: false
    };

    // this.logOut = this.logOut.bind(this);
  }

  showForm = form => {
    this.setState({ form });
  };
  // showLoginForm() {
  //   this.setState({ isLogin: true, isRegister: false });
  //   //this.setState({form: "login"});
  // }

  // showRegisterForm() {
  //   this.setState({ isRegister: true, isLogin: false });
  //   //this.setState({"form": "register"});
  // }

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

  render() {
    const { isLoading, token } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Loading..</p>
        </div>
      );
    }

    if (!token) {
      return (
        <div className="login-container">
          <div className="box-controller">
            <div className="controller" onClick={() => this.showForm("login")}>
              <h5>Login</h5>
            </div>
            <div
              className="controller"
              onClick={() => this.showForm("register")}
            >
              <h5>Register</h5>
            </div>
          </div>
          <div className="input-container">
            {this.state.form === "login" && (
              <LoginForm checkLog={this.props.checkLog} />
            )}
            {this.state.form === "register" && <RegisterForm />}
          </div>
        </div>
      );
    }
  }
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isRegistered: false,
      token: "",
      signUpError: "",
      signUpFirstName: "",
      signUpLastName: "",
      signUpEmail: "",
      signUpPassword: ""
    };

    // this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(
    //   this
    // );
    // this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(
    //   this
    // );
    // this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(
    //   this
    // );
    // this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(
    //   this
    // );

    // this.onSignUp = this.onSignUp.bind(this);
  }

  onTextboxChangeSignUpEmail = event => {
    this.setState({
      signUpEmail: event.target.value
    });
  };

  onTextboxChangeSignUpPassword = event => {
    this.setState({
      signUpPassword: event.target.value
    });
  };

  onTextboxChangeSignUpFirstName = event => {
    this.setState({
      signUpFirstName: event.target.value
    });
  };

  onTextboxChangeSignUpLastName = event => {
    this.setState({
      signUpLastName: event.target.value
    });
  };

  onSignUp = () => {
    // Grab state
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword
    } = this.state;

    this.setState({
      isLoading: true
    });
    // Post request to backend
    fetch("/api/account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          //! setInStorage("the_main_app", { token: json.token }); This needs work.

          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpPassword: "",
            signUpFirstName: "",
            signUpLastName: "",
            isRegistered: true,
            token: json.token
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          });
        }
      });
  };

  render() {
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpError
      // isRegistered
    } = this.state;

    // if (isRegistered) {
    //   return <Redirect to="/welcome" />;
    // }

    return (
      <div className="inner-container">
        <img src={logo1} height="auto" width="150" alt="AlgoLingo" />
        <div className="box-header">Please register:</div>
        {signUpError ? <p>{signUpError}</p> : null}
        <div className="box">
          <div className="input-group">
            <TextInput
              label="First Name"
              type="text"
              value={signUpFirstName}
              onChange={this.onTextboxChangeSignUpFirstName}
            />
          </div>
          <div className="input-group">
            <TextInput
              label="Last Name"
              type="text"
              value={signUpLastName}
              onChange={this.onTextboxChangeSignUpLastName}
            />
          </div>
          <div className="input-group">
            <TextInput
              label="Email"
              type="email"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
            />
          </div>
          <div className="input-group">
            <TextInput
              label="Password"
              type="password"
              value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn waves-effect waves-light light-blue darken-2"
              onClick={this.onSignUp}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      token: "",
      signInError: "",
      signInEmail: "",
      signInPassword: "",
      loggedIn: false
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(
      this
    );
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(
      this
    );

    this.onSignIn = this.onSignIn.bind(this);
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value
    });
  }
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }

  handleChange = () => {
    this.props.checkLog(true);
  };

  onSignIn = () => {
    // Grab state
    const { signInEmail, signInPassword } = this.state;
    // const { state = {} } = this.props.location;
    // const { prevLocation } = state;

    this.setState({
      isLoading: true
    });
    // Post request to backend
    fetch("/api/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage("the_main_app", { token: json.token });

          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: "",
            signInEmail: "",
            token: json.token,
            loggedIn: true
          });
          this.handleChange();
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false
          });
        }
      });
  };

  render() {
    const { signInEmail, signInPassword, signUpError, loggedIn } = this.state;

    if (loggedIn) {
      return <Redirect to="/welcome" />;
    }

    return (
      <div className="inner-container">
        <img src={logo1} height="auto" width="150" alt="AlgoLingo" />
        <div className="box-header">Please login:</div>
        {signUpError ? <p>{signUpError}</p> : null}
        <div className="box">
          <div className="input-group">
            <TextInput
              label="Email"
              type="email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
            />
          </div>
          <div className="input-group">
            <TextInput
              label="Password"
              type="password"
              value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn waves-effect waves-light light-blue darken-2"
              onClick={this.onSignIn.bind(this)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
