import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplyNow from "./components/NewAdmission/ApplyNow";
import HomePage from "./components/Home/HomePage";
import NavTop from "./components/Navigation/NavTop";
import LoginPage from "./components/WebPortal/LoginPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="applyNow" element={<div>
        <NavTop/>
        <ApplyNow/>
        </div>}
        />
        <Route path="portalHome" element ={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}
export default App;
