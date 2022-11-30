import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconLabelButtons from './Commentpostbutton';
import "./Commentpost.css"
import { useState } from "react";
export default function BasicTextFields({onCmntData}) {
const[cmmnt,setCmmnt]=useState("");
  function handleCmmntChange(e){
    setCmmnt(e.target.value);
  }
  function handleClick(e){
      // e.prevent.Default();
      onCmntData(cmmnt);
      setCmmnt("");
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '68ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="outlined-basic" label="Comment" variant="outlined" className='outlinebox' onChange={handleCmmntChange} value={cmmnt}/>
    <IconLabelButtons onClick={handleClick}/>
    </Box>
    
  );
}