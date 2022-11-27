import React from "react";
import "./Widgets.css";
import Button from "@mui/material/Button";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import ActionAreaCard from "./Gmeet";
function Widgets({ auth }) {
  const navigate = useNavigate();
  function handleLogout() {
    alert("logging out...");
    signOut(auth);
    navigate("/portalHome");
    return;
  }
  return (
    <div className="widgets">
      <div className="logoutbutton">
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="widgets__widgetcontainer">
        <h2>Whats Happening </h2>
        <div class="gmeet">
          <ActionAreaCard/>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
