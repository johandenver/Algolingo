import React from "react";
import "./style.css";
import { Collapsible } from "react-materialize";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/tomorrow-night-bright.css";
import { FormBtn, TextArea } from "../Form/index";
import logo2 from "../../images/AlgoLingo2.png";
// import storage from "../../utils/storage"

function AlgorithmCard(Algorithm) {
  return (
    <div className="library-area" key={Algorithm._id}>
      <Collapsible className="z-depth-0">
        <li>
          <div className="collapsible-header title-header">
            {/* <img src={logo2} height="auto" width="45" alt="AlgoLingo" /> */}

            <h5 className="algo-title" name="title" value="">
              {Algorithm.title}
            </h5>
          </div>
          <div className="collapsible-body">
            <div className="row">
              <div className="description-container">
                <form>
                  <h5>{Algorithm.title} Description: </h5>
                  <p className="algo-description" name="description">
                    {Algorithm.description}
                  </p>
                  <TextArea
                    id="library-snippet"
                    name="answer"
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
                  <h5>Click here for one {Algorithm.title} solution!</h5>
                </div>
                <div className="collapsible-body answer-body">
                  <div>
                    <p>
                      Below is one possible way to solve the {Algorithm.title}{" "}
                      Algorithm. How does your solution compare?
                    </p>
                    <Highlight className="Javascript answer-box">
                      {Algorithm.answer}
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

// class AlgorithmCard extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title:
//     }
//   }
//   render() {

//     return (
//       <div className="library-area" key={Algorithm._id}>
//         <Collapsible className="z-depth-0">
//           <li>
//             <div className="collapsible-header title-header">
//               {/* <img src={logo2} height="auto" width="45" alt="AlgoLingo" /> */}

//               <h5 className="algo-title" name="title" value="">
//                 {Algorithm.title}
//               </h5>
//             </div>
//             <div className="collapsible-body">
//               <div className="row">
//                 <div className="description-container">
//                   <form>
//                     <h5>{Algorithm.title} Description: </h5>
//                     <p className="algo-description" name="description">
//                       {Algorithm.description}
//                     </p>
//                     <TextArea
//                       id="library-snippet"
//                       name="answer"
//                       placeholder="Code your answer here!"
//                       require
//                     />
//                     <FormBtn type="submit" name="action">
//                       Save to Dashboard
//                       <i className="material-icons right">save</i>
//                     </FormBtn>
//                   </form>
//                 </div>
//               </div>
//               {/* <form>
//               <div className="row form-row">
//                 <TextArea
//                   id="library-snippet"
//                   name="answer"
//                   placeholder="Code your answer here!"
//                 />
//               </div> */}
//               {/* <button
//               type="submit"
//               className="btn waves-effect waves-light"
//               name="action"
//             >
//               preview
//             </button>
//             <button
//               type="submit"
//               className="btn waves-effect waves-light"
//               name="action"
//             >
//               edit
//             </button> */}

//               {/* <FormBtn type="submit" name="action">
//                 Save to Dashboard
//                 <i className="material-icons right">save</i>
//               </FormBtn>
//             </form> */}
//               <Collapsible className="z-depth-0">
//                 <li>
//                   <div className="collapsible-header answer-title">
//                     <img
//                       className="logo2"
//                       src={logo2}
//                       height="auto"
//                       width="45"
//                       alt="AlgoLingo"
//                     />
//                     <h5>Click here for one {Algorithm.title} solution!</h5>
//                   </div>
//                   <div className="collapsible-body answer-body">
//                     <div>
//                       <p>
//                         Below is one possible way to solve the {Algorithm.title}{" "}
//                         Algorithm. How does your solution compare?
//                       </p>
//                       <Highlight className="Javascript answer-box">
//                         {Algorithm.answer}
//                       </Highlight>
//                     </div>
//                   </div>
//                 </li>
//               </Collapsible>
//             </div>
//           </li>
//         </Collapsible>
//       </div>
//     );
//   }
// }

export default AlgorithmCard;
