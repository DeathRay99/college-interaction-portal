import React from "react";
import "./PortalHomePage.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function PortalHomePage() {
  let auth = getAuth();
  return (
    <div className="portal-home">
      <Sidebar auth={auth} />
      <Feed />
      <Widgets auth={auth} />
    </div>
  );
}

export default PortalHomePage;
