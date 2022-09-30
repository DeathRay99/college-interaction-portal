import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ApplyNow() {
  const [stream, setStream] = useState("Select");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [nationality, setNationality] = useState("");

  async function dataSubmitHandler(details) {
    await fetch(
      "https://college-portal-14f75-default-rtdb.firebaseio.com/Registrations.json",
      {
        method: "POST",
        body: JSON.stringify({
          applicantData: details,
        }),
      }
    );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (stream === "Select" || stream === "None") {
      setStream("None");
      return;
    }
    var details = {
      Name: name,
      Email: email,
      Mobile: +mobile,
      City: city,
      State: state,
      Nationality: nationality,
      Stream: stream,
    };
    dataSubmitHandler(details);

    setName("");
    setStream("Select");
    setEmail("");
    setMobile("");
    setState("");
    setCity("");
    setNationality("");
  };

  const handleStreamChange = (event) => {
    setStream(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };
  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Apply Now
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  value={name}
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmailChange}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="mobile"
                  label="mobile"
                  type="text"
                  id="Mobile"
                  autoComplete=""
                  onChange={handleMobileChange}
                  value={mobile}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="state"
                  label="State"
                  type="text"
                  id="state"
                  autoComplete=""
                  value={state}
                  onChange={handleStateChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  type="text"
                  id="city"
                  autoComplete=""
                  value={city}
                  onChange={handleCityChange}
                />
              </Grid>
              <Grid item xs={12}>
                <div></div>
                <TextField
                  required
                  fullWidth
                  name="Nationality"
                  label="Nationality"
                  type="text"
                  id="Nationality"
                  value={nationality}
                  autoComplete=""
                  onChange={handleNationalityChange}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <InputLabel>Branch*</InputLabel>
                <Select
                  required
                  fullWidth
                  value={stream}
                  onChange={handleStreamChange}
                  style={{
                    backgroundColor:
                      stream === "None"
                        ? "rgba(237, 124, 124, 0.7)"
                        : "transparent",
                  }}
                >
                  <MenuItem value="Select">
                    --Please choose an option--
                  </MenuItem>
                  <MenuItem value="Ece">ECE</MenuItem>
                  <MenuItem value="Cse">CSE</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      required
                    />
                  }
                  label="I agree to terms and conditions required during admissions and during tenure of exams.."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register Now
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
