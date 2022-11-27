import React from "react";
import "./Sidebar.css";
import Sidebaroption from "./Sidebaroption";
import DateRangeIcon from '@mui/icons-material/DateRange';
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Button } from "@mui/material";
import ActionAreaCard from "./Sidebarcard";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
function Sidebar({auth}) {
  const [img, setImg] = useState("");
  const [profileName,setProfileName]=useState("");
  const [enroll,setEnroll]=useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        alert("Logged In");
        setImg(data.photoURL);
        setProfileName(data.displayName);
        setEnroll(data.email.slice(0,10));
        console.log(data.photoURL,data.displayName);
      } else {
        alert("Not Logged In");
      }
    });
  }, []);
  return (
    <div className="sidebar">
      {/* <TwitterIcon className='sidebar__twittericon' /> */}
      <ActionAreaCard
        name={profileName}
        image={img}
        enroll={enroll}
      />
      
      <Sidebaroption active text="Home" Icon={HomeIcon} />
      <Sidebaroption text="Attendence" Icon={DateRangeIcon} />
      <Sidebaroption text="Examination Details" Icon={NotificationsNoneIcon} />
      <Sidebaroption text="Fees" Icon={MailOutlineIcon} />
      <Sidebaroption text="Feedback" Icon={BookmarkBorderIcon} />
      
     
    </div>
  );
}

export default Sidebar;
