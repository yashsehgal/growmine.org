
import { Route, HashRouter, Link } from "react-router-dom";
import "../../../Styles/main.css"


const LoginPage = () => {
  return (
    <div className="LoginPage appContainer">
      <HashRouter basename="/">
        <div className="form-container"
          id="login-form-container">
          <h2>
            Long time, no see!<br /> <text>Login</text> to your account
          </h2>
          <p id="login-description">
            Don't have an account? <br />
            <Link to="/create-account/community"><text className="link">Create Community Account</text></Link>, <Link to="/create-account/mentor"><text className="link">Create Mentor Account</text></Link>
          </p>

          <form action="" method="POST" autoComplete="on" className="login-community-form">
            <div className="form-action">
              <label name="username-email">Enter Username, Email Address, Phone Number</label>
              <input type="text"
                className="input-box"
                placeholder="Your Username, Email Address, Contact Number"
                required />
            </div>
            <div className="form-action">
              <label name="password">Enter your Password</label>
              <input type="password"
                className="input-box"
                placeholder="**********"
                required />
            </div>
            <div className="button_layer-horizontal form-action">
              <button type="submit"
                className="primaryButton"
                id="create-account-submit-button">
                Login to your Account
              </button>
            </div>
          </form>
          <div className="button_layer-horizontal form-action-flex">

            <button className="secondaryButton"
              id="back-to-home-button">
              <Link to="/">
                <i class="fas fa-arrow-left"></i> Back to Home
              </Link>
            </button>

            <button className="secondaryButton"
              id="create-account-mentor-button">
              <Link to="/create-account/mentor">
                Create a new Mentor Account
              </Link>
            </button>
          </div>
        </div>

        {/* BG Color Section */}
        <div className="BG-section"></div>
      </HashRouter>
    </div>
  )
}

export default LoginPage;