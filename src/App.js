import { Route, HashRouter, Link } from "react-router-dom";
import LandingPage from "./Views/LandingPage/LandingPage";


function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Route exact path="/" exact component={LandingPage} />
      </HashRouter>
    </div>
  );
}

export default App;
