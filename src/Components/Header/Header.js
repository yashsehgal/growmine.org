
import { HashRouter, Link } from "react-router-dom";
import "../../Styles/main.css"
import ProfileHeaderImage from "../../Assets/Blue.jpg"

const Header = () => {
  return (
    <div className="Header appContainer">
      <HashRouter basename="/">
        <span className="logo">
          <Link to="/">
            Growmine<text>.org</text>
          </Link>
        </span>
        <div className="header-options-container">
          <ul className="header-options-list">
            <li className="header-option">
              <Link to="/explore">
                Explore
              </Link>
            </li>
            <li className="header-option">
              <Link to="/contribute">
                Contribute
              </Link>
            </li>
            <li className="header-option">
              <Link to="/login">
                Login
              </Link>
            </li>
            <li className="header-option">
              <Link to="/create-account/community">
                <button className="primaryButton">
                  Create an Account
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </HashRouter>
    </div>
  )
}

const ProfileHeader = () => {
  return (
   <div className="ProfileHeader appContainer">
      <HashRouter basename="/">
        <span className="logo">
          <Link to="/">
            Growmine<text>.org</text>
          </Link>
        </span>
        <div className="header-options-container">
          <ul className="header-options-list">
            <li className="header-option">
              <Link to="/explore">
                Explore
              </Link>
            </li>
            <li className="header-option">
              <Link to="/contribute">
                Contribute
              </Link>
            </li>
            <li className="header-option">
              <Link to="/profile/mentor">
                <img className="ProfileHeader-image" src ={ProfileHeaderImage}/>
              </Link>
            </li>
            <li className="header-option">
              <Link to="/create-account/community">
                <button className="primaryButton">
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </HashRouter>
   </div>

  )
};

export default ProfileHeader
