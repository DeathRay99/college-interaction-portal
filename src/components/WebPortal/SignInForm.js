import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate, Link } from "react-router-dom";
import { app, database } from "../../firebaseConfig.js";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
const theme = createTheme();

export default function SignIn(props) {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [verified,setVerified]=useState(false);
  let auth = getAuth();
  const collectionRef = collection(database, "users");
  let googleProvider = new GoogleAuthProvider();
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified((prev)=>!prev);
  }
  const navigate = useNavigate();
 async function check_student_teacher(response){
    try {
      const snap = await getDoc(doc(collectionRef, response.user.uid));
      if (snap.exists()) {
        if (snap.data().type === "student") {
          navigate("/portalHome/studentLogin");
          console.log(snap.data());
          return;
        }
        alert("bhdwee tchr hai tu, student nhi");
        signOut(auth);
        navigate("/portalHome");
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleGoogleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithPopup(auth, googleProvider);
      // props.handleAfterLogin(response.user.photoURL);
      // await setDoc(doc(collectionRef, response.user.uid), {
      //   try: "well tried",
      //   image: response.user.photoURL,
      //   time: "xxx"
      // })
      check_student_teacher(response);}
      catch (error) {
        alert(error.message);
      }
  };
  const handleBack = () => {
    props.handleLoginOperation();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        userID.concat("@mail.jiit.ac.in"),
        password
      );
      console.log(res);
      check_student_teacher(res);
      setUserID("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ marginTop: 3, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="UserID"
              label="UserID"
              name="UserID"
              //   autoComplete="email"
              onChange={(e) => setUserID(e.target.value)}
              value={userID}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              value={password}
            />
            <ReCAPTCHA
              sitekey="6Ldn3jcjAAAAALO2ix32OqgmovmNnoZTiDHxR9lo"
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              disabled = {verified?false:true}
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link onClick={handleGoogleLogin}>Sign In with Google</Link>
                <Button
                  sx={{
                    padding: 0.5,
                    marginLeft: 23,
                    backgroundColor: "orange",
                  }}
                  variant="contained"
                  onClick={handleBack}
                >
                  ⬅️BACK
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
