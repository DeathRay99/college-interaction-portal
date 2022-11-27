import "./LoginPage.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NavTop from "../Navigation/NavTop";
import { app, database } from "../../firebaseConfig.js";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignInForm";
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
function LoginPage() {
  // const collectionRef = collection(database, "users");
  // const navigate = useNavigate();
  // let auth = getAuth();
  // let googleProvider = new GoogleAuthProvider();
  const [operation, setOperation] = useState(false);
  function handleLoginOperation() {
    setOperation((prevState) => !prevState);
  }
  // async function handleLogin() {
  //   try {
  //     const response = await signInWithPopup(auth, googleProvider);
  //     props.handleAfterLogin(response.user.photoURL);
  //     await setDoc(doc(collectionRef, response.user.uid), {
  //       try: "well tried",
  //       image: response.user.photoURL,
  //       time: "xxx"
  //     })
  //     const snap = await getDoc(doc(collectionRef, response.user.uid));

  //     if (snap.exists()) {
  //       if(snap.data().type==="student")
  //       console.log("bhdwee tch hai tu, student nhi");
  //       signOut(auth);
  //       navigate("/portalHome")
  //     } else {
  //       console.log("No such document");
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  return (
    <>
      <NavTop />
      <div className="login">
        {!operation && (
          <div className="login_box">
            <Link onClick={handleLoginOperation}>Login As Student</Link>
            <a href="#">Login As Teacher</a>
          </div>
        )}
        {operation && <SignIn handleLoginOperation={handleLoginOperation} />}
      </div>
    </>
  );
}

export default LoginPage;
