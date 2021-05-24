
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
            <p id="login-description">
              Already have an account? <Link to="/login"><text className="link">Login instead</text></Link>
            </p>

            <form action="" method="POST" autoComplete="on" className="create-account-mentor-form">
              <div className="form-action">
                <label name="mentor-first-name">First Name</label>
                <input type="text"
                  className="input-box"
                  placeholder="Enter your First Name" 
                  required />

              </div>
              <div className="form-action">
                <label name="mentor-last-name">Last Name</label>
                <input type="text"
                  className="input-box"
                  placeholder="Enter your Last Name"
                  required />
              </div>
            </form>
        </div>
      </HashRouter>
    </div>
  )
}

export default CreateAccount_Mentor;