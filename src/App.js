import NavTop from "./components/NavTop";
import NavTop2 from "./components/NavTop2";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import BasicStack from "./components/SecondPage/BasicStack";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ApplyNow from "./components/ApplyNow";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <NavTop />
            <div style={{ position: "relative" }}>
              <NavTop2 />
              <Carousel />
            </div>
            <BasicStack />
            <Footer />
          </div>
        </Route>
        <Route path="/applyNow">
          <NavTop />
          <ApplyNow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
