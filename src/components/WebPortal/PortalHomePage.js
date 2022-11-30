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
import {useState} from "react";
import Attendance from "./Attendance";
import Exams from "./Exams";
import Fees from "./Fees";
import Feedback from "./Feedback";

function PortalHomePage() {
const [show,setShow]=useState("Home");
function updateHandler(toShow){
// console.log(toShow);
setShow(toShow);
}
console.log(show);
  let auth = getAuth();
  return (
    <div className="portal-home">
      <Sidebar auth={auth} onUpdate={updateHandler} />
      {show==="Home"&&<Feed auth={auth} />}
      {show==="Home"&&<Widgets auth={auth} />}
      {show==="Attendance"&&<Attendance/>}
      {show==="Examination Details"&&<Exams/>}
      {show==="Fees"&&<Fees/>}
      {show==="Feedback"&&<Feedback/>}


    </div>
  );
}

export default PortalHomePage;
