
import { Route, HashRouter, Link } from "react-router-dom";
import "../../../Styles/main.css"


const CreateAccount_Community = () => {
  return (
    <div className="CreateAccount_Community appContainer">
      <HashRouter basename="/">
        <div className="form-container" 
          id="create-account-community-form-container">
            <h2>
              Register your <text>community</text> on <br />Growmine today!
            </h2>
            <p id="login-description">
              Already have an account? <Link to="/login"><text className="link">Login instead</text></Link>
            </p>

            <form action="" method="POST" autoComplete="on" className="create-account-community-form">
              <div className="form-action">
                <label name="community-name">Enter the Name of your Community</label>
                <input type="text"
                  className="input-box"
                  placeholder="Your Community Name" 
                  required="Please type the name of you Community" />
              </div>
              <div className="form-action">
                <label name="community-email">Community Email Address</label>
                <input type="email"
                  className="input-box"
                  placeholder="Eg: edusupport@domain.org" 
                  required="Your Email Address is required" />
              </div>
              <div className="form-action">
                <label name="community-mobile">Contact/Phone Number</label>
                <input type="tel"
                  className="input-box"
                  placeholder="+91 9092437****"
                  required />
              </div>
              <div className="form-action">
                <label name="location">Location</label>
                <input type="text"
                  className="input-box"
                  placeholder="Your Community Location"
                  required="Your Community's location is required" />
              </div>
              <div className="form-action">
                <label name="community-size">Size of your Community/Organization/Group</label>
                <input type="number"
                  className="input-box"
                  placeholder="Enter the size of your community"
                  required="Size of the community is required" />
              </div>
              <div className="form-action">
                <label name="community-type">Type of your Community</label>
                <input type="number"
                  className="input-box"
                  placeholder="What's the type of your Community?" 
                  required="Type of your community is required" />
              </div>
              <div className="form-action">
                <label name="community-topics">Some topics/domains your Community is related to</label>
                <input type="text"
                  className="input-box"
                  placeholder="Enter Topics, domains and interests of your community"
                  required="false" />
              </div>
              <div className="button_layer-horizontal form-action">
                <button type="submit"
                  className="primaryButton"
                  id="create-account-submit-button">
                    Confirm Submission
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

export default CreateAccount_Community;