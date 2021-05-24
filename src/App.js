import { Route, HashRouter } from "react-router-dom";
import LandingPage from "./Views/LandingPage/LandingPage";
import CreateAccount_Community from "./Views/UserAuthentication/CreateAccount_Community/CreateAccount_Community";


function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Route path="/" exact component={LandingPage} />
        <Route path="/create-account/community" exact component={CreateAccount_Community} />
      </HashRouter>
    </div>
  );
}

export default App;
