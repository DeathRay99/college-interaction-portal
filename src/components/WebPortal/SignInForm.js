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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let auth = getAuth();
  const collectionRef = collection(database, "users");
  let googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
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
      const snap = await getDoc(doc(collectionRef, response.user.uid));
      if (snap.exists()) {
        if (snap.data().type === "student") {
          navigate("/portalHome/studentLogin");
          console.log(snap.data());
          return;
        }
        console.log("bhdwee tchr hai tu, student nhi");
        signOut(auth);
        navigate("/portalHome")
        
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleBack=()=>{
    props.handleLoginOperation();
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      navigate("/portalHome/studentLogin");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link onClick={handleGoogleLogin}>Sign In with Google</Link>
                <Button sx={{padding: 0.5, marginLeft: 23, backgroundColor: "orange"}}variant="contained"
                onClick={handleBack}>⬅️BACK</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
