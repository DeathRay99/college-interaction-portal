import React from "react";
import "./Sidebar.css";
import Sidebaroption from "./Sidebaroption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
function Sidebar() {
  const [img, setImg] = useState("");
  const [profileName,setProfileName]=useState("");
  let auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        alert("Logged In");
        setImg(data.photoURL);
        setProfileName(data.displayName);
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
      />

      <Sidebaroption active text="Home" Icon={HomeIcon} />
      <Sidebaroption text="Attendence" Icon={SearchIcon} />
      <Sidebaroption text="Examination Details" Icon={NotificationsNoneIcon} />
      <Sidebaroption text="Fees" Icon={MailOutlineIcon} />
      <Sidebaroption text="Feedback" Icon={BookmarkBorderIcon} />
      {/* <Sidebaroption text="List"Icon={ListAltIcon} />
       <Sidebaroption text="Profile"Icon={PermIdentityIcon} />
       <Sidebaroption text="More"Icon={MoreHorizIcon} /> */}

      {/* button -> tweet  */}
      {/* <button variant = "outlined" className='sidebar__tweet' style={{width: "100%"}} >
       Tweet
        </button>
        */}
    </div>
  );
}

export default Sidebar;
