import { Route, HashRouter } from "react-router-dom";
import LandingPage from "./Views/LandingPage/LandingPage";
import CreateAccount_Community from "./Views/UserAuthentication/CreateAccount_Community/CreateAccount_Community";
import CreateAccount_Mentor from "./Views/UserAuthentication/CreateAccount_Mentor/CreateAccount_Mentor";
import LoginPage from "./Views/UserAuthentication/LoginPage/LoginPage";
import MentorProfile from "./Views/Profile/MentorProfile/MentorProfile";
import CommunityProfile from "./Views/Profile/CommunityProfile/CommunityProfile";
import Home from "./Views/Home/Home";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Route path="/" exact component={LandingPage} />
        <Route path="/create-account/mentor" exact component={CreateAccount_Mentor} />
        <Route path="/create-account/community" exact component={CreateAccount_Community} />
        <Route path="/login" exact component={LoginPage} />

        <Route path="/home" exact component={Home} />

        <Route path="/profile/mentor" exact component={MentorProfile} />
        <Route path="/profile/community" exact component={CommunityProfile} />
      </HashRouter>
    </div>
  );
}
export default App;
