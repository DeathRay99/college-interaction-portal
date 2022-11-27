import React from 'react'
import "./Widgets.css"
import Button from '@mui/material/Button';
import ActionAreaCard from './Gmeet';

function Widgets() {
  return (
    <div className='widgets' >
     <div className='logoutbutton'>
      <Button variant="outlined"  >
        Logout 
      </Button>
      </div>
      <div className='widgets__widgetcontainer'>
      <h2>Whats Happening </h2>
      <div className='gmeet'>
      <ActionAreaCard />
      </div>
      
     
      </div>

    </div>
  );
}

export default Widgets;


