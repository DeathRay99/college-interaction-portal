import { Routes, Route } from "react-router-dom";
import ApplyNow from "./components/NewApplicant/ApplyNow";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/WebPortal/LoginPage";
import PortalHomePage from "./components/WebPortal/PortalHomePage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="applyNow" element={<ApplyNow />} />
        <Route path="portalHome">
          <Route
            index
            element={<LoginPage /*handleAfterLogin={handleAfterLogin}*/ />}
          />
          {/* <Route path="studentLogin" element={<SamplePage/>} /> */}
          <Route path="studentLogin" element={<PortalHomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
