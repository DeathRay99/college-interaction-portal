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
function Sidebar({auth,onUpdate,Icon}) {
  // function handleClick(){
  //    onUpdate();
  // }
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
  
  const [isActive,setactive] = useState(false);


  function toggleClass() {
     setactive(!isActive)
  }

  const values = [
    { id: 1 ,text:"Home", Icon:HomeIcon ,onUpdate:"onUpdate"},
    { id: 2,text:"Attendance", Icon:DateRangeIcon ,onUpdate:"onUpdate"},
    { id: 3 , text:"Examination Details" ,Icon:NotificationsNoneIcon ,onUpdate:"onUpdate"},
    { id: 4 ,text:"Fees" ,Icon:MailOutlineIcon ,onUpdate:"onUpdate"},
    { id: 5 ,text:"Feedback", Icon:BookmarkBorderIcon,onUpdate:"onUpdate"}
  ];
  return (
    <div className="sidebar">
      {/* <TwitterIcon className='sidebar__twittericon' /> */}
      <ActionAreaCard
        name={profileName}
        image={img}
        enroll={enroll}
      />
      {/* className="sidebarbutton" */}
      {/* <button  className={`sidebarbutton ${isActive  ? 'Sidebaroption--active' : ''}`} onClick={toggleClass}>
        <Sidebaroption  text="Home" Icon={HomeIcon} onUpdate={onUpdate}/>
      </button>
       */}

       {values.map((val) => (
        <button onClick={() => setactive(val.id)} className={`sidebarbutton ${isActive === val.id ? "Sidebaroption--active" : ""} `} >
        <Sidebaroption  text={val.text} Icon={val.Icon} onUpdate={onUpdate} />
       
      </button>
          
        ))}
      
        {/* <Sidebaroption  text="Home" Icon={HomeIcon} onUpdate={onUpdate}/>
        <Sidebaroption text="Attendance" Icon={DateRangeIcon} onUpdate={onUpdate}/>
      <Sidebaroption text="Examination Details" Icon={NotificationsNoneIcon} onUpdate={onUpdate} />
      <Sidebaroption text="Fees" Icon={MailOutlineIcon} onUpdate={onUpdate} />
      <Sidebaroption text="Feedback" Icon={BookmarkBorderIcon} onUpdate={onUpdate}/> */}
      
      
     
    </div>
  );
}

export default Sidebar;
