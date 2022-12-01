import "./LoginPage.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NavTop from "../Navigation/NavTop";
import SignIn from "./SignInForm";
import { useEffect, useState } from "react";
function LoginPage() {
  const [operation, setOperation] = useState(false);
  const [userType,setUserType]=useState("");
  function handleLoginOperation(e) {
    setOperation((prevState) => !prevState);
    setUserType(e.target.getAttribute("data-type"));
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
  return (
    <>
      <NavTop />
      <div className="login">
        {!operation && (
          <div className="login_box">
            <Link onClick={handleLoginOperation} data-type="student">Login As Student</Link>
            <Link onClick={handleLoginOperation} data-type="teacher">Login As Teacher</Link>
          </div>
        )}
        {operation && <SignIn handleLoginOperation={handleLoginOperation} userType={userType} />}
      </div>
    </>
  );
}

export default LoginPage;
