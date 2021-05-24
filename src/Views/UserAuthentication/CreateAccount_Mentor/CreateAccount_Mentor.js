
import { Route, HashRouter, Link } from "react-router-dom";
import "../../../Styles/main.css"

const CreateAccount_Mentor = () => {
  return (
    <div className="CreateAccount_Mentor appContainer">
      <HashRouter basename="/">
        <div className="form-container"
          id="create-account-mentor-form-container">
            <h2>
              Apply as a Mentor and <text>teach</text> <br />people globally
            </h2>
        </div>
      </HashRouter>
    </div>
  )
}

export default CreateAccount_Mentor;