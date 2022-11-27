<<<<<<< HEAD
import React from 'react'
import "./Widgets.css"
import Button from '@mui/material/Button';
import ActionAreaCard from './Gmeet';

function Widgets() {
=======
import React from "react";
import "./Widgets.css";
import Button from "@mui/material/Button";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
function Widgets({ auth }) {
  const navigate = useNavigate();
  function handleLogout() {
    alert("logging out...");
    signOut(auth);
    navigate("/portalHome");
    return;
  }
>>>>>>> 258e1440f4b7c30d9e8465c77a80eee1afba3282
  return (
    <div className="widgets">
      <div className="logoutbutton">
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </div>
<<<<<<< HEAD
      <div className='widgets__widgetcontainer'>
      <h2>Whats Happening </h2>
      <div className='gmeet'>
      <ActionAreaCard />
      </div>
      
     
=======
      <div className="widgets__widgetcontainer">
        <h2>Whats Happening </h2>
>>>>>>> 258e1440f4b7c30d9e8465c77a80eee1afba3282
      </div>
    </div>
  );
}

export default Widgets;
