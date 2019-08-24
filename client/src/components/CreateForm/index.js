import React from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
import { TextArea } from "../Form/index";
import { TextInput } from "react-materialize";
import API from "../../utils/API";

class CreateForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      custom: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description, custom } = this.state;
    console.log(
      "Form was submited.",
      "title: " + title,
      "Description: " + description,
      "Custom Code: " + custom
    );

    API.showSaved().post(() => {
      // console.log();
    });
  };

  // this.routeChange();

  // routeChange = () => {
  //   let path = `/dashboard`;
  //   this.props.history.push(path);
  // };

  render() {
    console.log("Custom Form state is", this.state);
    const { title, description, custom } = this.state;
    return (
      <div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-group">
                <TextInput
                  name="title"
                  label="Algorithm Title:"
                  type="text"
                  value={title}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <TextInput
                  name="description"
                  label="Algorithm Description:"
                  type="text"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row form-row">
              <div className=" col s12">
                <TextArea
                  id="custom-snippet"
                  name="custom"
                  placeholder="Code your Algorithm here!"
                  require="true"
                  value={custom}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row form-row">
              <button
                type="submit"
                value="submit"
                className="btn waves-effect waves-light"
                name="action"
                // onClick={this.routeChange}
              >
                Save to Dashboard
                <i className="material-icons right">save</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateForm);
