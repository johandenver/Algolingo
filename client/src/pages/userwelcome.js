import React from "react";
import Sidenav from "../components/sidenav";
// import API from "../utils/API";
import logo2 from "../images/AlgoLingo2.png";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("our state is", this.state);
    return (
      <div className="row">
        <div className="col s12 m4 l3">
          <Sidenav />
        </div>

        <div className="col s12 m8 l9">
          <div className="algo-container">
            <div className="library-header">
              <img
                className="logo2"
                src={logo2}
                height="auto"
                width="100"
                alt="AlgoLingo"
              />
              <h2>Welcome {this.props.firstName}!</h2>
            </div>

            <p>
              Cornice T-bar endo, poaching dust on crust clipless McTwist scream
              couloir dope hardtail. Grind clean rigid titanium, poaching huck
              chain suck hurl carcass frozen chicken heads T-bar huckfest fatty
              pinner BB. Sucker hole schwag schwag ripper bro travel, dope
              huckfest. Skinny corn wack clipless bomb hole poaching Skate
              pillow popping avie cruiser face plant presta. Skid lid bonk
              hammer frozen chicken heads, grom 180 taco trucks japan air butter
              heli corduroy spread eagle glades.
            </p>

            <p>
              Skate flow rail fatty berm. Fully lid white room Whistler snake
              bite. Face shots carbon death cookies sucker hole rip frozen
              chicken heads ripper phat reverse camber. Glades mute brain bucket
              presta. Huckfest shuttle tele, park rat switch stunt taco mitt BB
              line moguls.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
