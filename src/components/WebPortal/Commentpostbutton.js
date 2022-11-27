import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import "./Commentpost.css"

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
    
      <Button variant="contained" endIcon={<SendIcon />} className='commentbutton' >
       Post
      </Button>
    </Stack>
  );
}