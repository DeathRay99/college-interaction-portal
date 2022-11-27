import React from 'react'
import "./Tweetbox.css"
import { Avatar,button } from '@mui/material'


function Tweetbox({image}) {
  return (
    <div className='tweetbox'>
        <form>
         <div className='tweetbox__input' >
         <Avatar 
            src={image}
         />
         <input placeholder="what's happening?" type="text" /> 
         
         </div>
         <input
          className='tweetbox__imageinput'
          placeholder='Optional: Enter image URL'
          type='text'
           />

         <button className='tweetbox__tweetbottom'>Post</button>
        </form>
        <label for="myfile">Select files:</label>
        <input type="file" id="myfile" name="myfile" multiple className='selectfile'/>
       
    </div>
  );
}

export default Tweetbox;