import React from "react";
import "./style.css";

function CreateForm(props) {
    return (
        <form className="col s9">
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"  onChange={props.handleInputChange}></textarea>
                    <label for="textarea1">Title</label>
                </div>
            </div>
            <div className="row">
                <label for="description">Description</label>
                <input
                onChange={props.handleInputChange}
                type="text"
                // className="form-control"
                className="input-field col s12"
                placeholder="Describe your Algorithm here"
                id="description"
                />
               
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <label for="textarea1">Description</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="textarea1" className="textarea snippet-box"></textarea>
                    <label for="textarea1">Create Algorithm here!</label>
                </div>
            </div>
            <div className="row">
                <button type="submit" onClick={props.handleFormSubmit} className="btn waves-effect waves-light" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </form>
    );
}

export default CreateForm;