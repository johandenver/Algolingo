import React from "react";
import "./style.css";
import { TextArea } from "../Form/index";
import { TextInput } from "react-materialize";

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
  };

  render() {
    const { title, description, custom } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-group">
              <TextInput
                name="title"
                label="Title"
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
                label="Description"
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
                placeholder="Create your code here!"
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
            >
              Save to Dashboard
              <i className="material-icons right">save</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateForm;
