
import { HashRouter, Link } from "react-router-dom";
import "../../Styles/main.css"

const Header = () => {
  return (
    <div className="Header appContainer">
      <HashRouter basename="/">
        <span className="logo">
          <a href="/">
            Growmine<text>.org</text>
          </a>
        </span>
        <div className="header-options-container">
          <ul className="header-options-list">
            <li className="header-option">
              <a href="/explore">
                Explore
              </a>
            </li>
            <li className="header-option">
              <a href="/contribute">
                Contribute
              </a>
            </li>
            <li className="header-option">
              <a href="/login">
                Login
              </a>
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
    <div className="ProfileHeader">

    </div>
  )
};

export default Header