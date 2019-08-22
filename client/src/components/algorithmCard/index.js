import React from "react";
import "./style.css";
import { Collapsible } from "react-materialize";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/tomorrow-night-bright.css";
import { FormBtn, TextArea } from "../Form/index";
import logo2 from "../../images/AlgoLingo2.png";
// import storage from "../../utils/storage"

// on submit
//  call saveUserAlgorithm and pass in algorithm data
class AlgorithmCard extends React.Component {
  // { algorithm, saveUserAlgorithm }
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: ""
    };
  }

  onChange = e => {
    // give to to text box
    // update state with value
    this.setState({
      userAnswer: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.saveUserAlgorithm({
      saveId: this.props.algorithm._id,
      userAnswer: this.state.userAnswer
    });
  };

  render() {
    const { algorithm } = this.props;
    // console.log("Algorithm save state is", this.state);
    return (
      <div className="library-area" key={algorithm._id}>
        <Collapsible className="z-depth-0">
          <li>
            <div className="collapsible-header title-header">
              {/* <img src={logo2} height="auto" width="45" alt="AlgoLingo" /> */}

              <h5 className="algo-title" name="title" value="">
                {algorithm.title}
              </h5>
            </div>
            <div className="collapsible-body">
              <div className="row">
                <div className="description-container">
                  <form onSubmit={this.onSubmit}>
                    <h5>{algorithm.title} Description: </h5>
                    <p className="algo-description" name="description">
                      {algorithm.description}
                    </p>
                    <TextArea
                      id="library-snippet"
                      name="answer"
                      value={this.state.userAnswer}
                      onChange={this.onChange}
                      placeholder="Code your answer here!"
                      require="true"
                    />
                    <FormBtn type="submit" name="action">
                      Save to Dashboard
                      <i className="material-icons right">save</i>
                    </FormBtn>
                  </form>
                </div>
              </div>

              <Collapsible className="z-depth-0">
                <li>
                  <div className="collapsible-header answer-title">
                    <img
                      className="logo2"
                      src={logo2}
                      height="auto"
                      width="45"
                      alt="AlgoLingo"
                    />
                    <h5>Click here for one {algorithm.title} solution!</h5>
                  </div>
                  <div className="collapsible-body answer-body">
                    <div>
                      <p>
                        Below is one possible way to solve the {algorithm.title}{" "}
                        algorithm. How does your solution compare?
                      </p>
                      <Highlight className="Javascript answer-box">
                        {algorithm.answer}
                      </Highlight>
                    </div>
                  </div>
                </li>
              </Collapsible>
            </div>
          </li>
        </Collapsible>
      </div>
    );
  }
}

export default AlgorithmCard;
