import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import AboutUs from "./AboutUs";
import Placements from "./Placements";
import { styled } from "@mui/material/styles";
import "./BasicStack.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(9),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={1}>
        <div className="second-page">
          <Item>
            <AboutUs />
          </Item>
        </div>
        <div className="placements">
          <Item
            sx={{
              padding: 0,
              paddingTop: "70px",
              paddingBottom: "70px",
            }}
          >
            <Placements />
          </Item>
        </div>
      </Stack>
    </Box>
  );
}
