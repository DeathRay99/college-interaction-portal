import { Routes, Route } from "react-router-dom";
import ApplyNow from "./components/NewApplicant/ApplyNow";
import HomePage from "./components/Home/HomePage";
import NavTop from "./components/Navigation/NavTop";
import LoginPage from "./components/WebPortal/LoginPage";
function App() {
  return (
    <div>
      <NavTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="applyNow" element={<ApplyNow />} />
        <Route path="portalHome" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
export default App;
