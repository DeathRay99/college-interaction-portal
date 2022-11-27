import React from 'react'
import "./Tweetbox.css"
import { Avatar,button } from '@mui/material'


function Tweetbox({image}) {
  return (
    <div className='tweetbox'>
        <form className='formclass'>
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
        <div className='uploadfile' >
        <label for="myfile">Select files:</label>
        <input type="file" id="myfile" name="myfile" multiple className='selectfile'/>
        </div>
         <button className='tweetbox__tweetbottom'>Post</button>
        </form>
       
       
    </div>
  );
}

export default Tweetbox;