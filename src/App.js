import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplyNow from "./components/ApplyNow";
import HomePage from "./components/HomePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="applyNow" element={<ApplyNow/>}/>
      </Routes>
    </Router>
  );
}
export default App;
