import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ApplyNow from "./components/NewApplicant/ApplyNow";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/WebPortal/LoginPage";
import SamplePage from "./SamplePage";
function App() {
  // const [image,setImage]=useState("")
  //   function handleAfterLogin(data){
  //      setImage(data);
  //   }
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="applyNow" element={<ApplyNow />} />
        <Route path="portalHome">
          <Route index element={<LoginPage /*handleAfterLogin={handleAfterLogin}*/ />} />
          <Route path="studentLogin" element={<SamplePage/>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
