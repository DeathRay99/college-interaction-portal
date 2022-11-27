import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import SimplePaper from './Commentsection';

function Post({
    displayname,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
          <Avatar src={avatar} />
        </div>
        <div className='post__body'>
           <div className='post__header'>
              <div className='post__headertext'>
                 <h3>
                    {displayname}{" "}
                    <span className='post__headerspecial'>
                {verified && <VerifiedIcon className='post__badge' />}
                   @{username}
                    </span>
                 </h3>
              </div>
              <div className='post__headerdescription'>
               <p> {text}</p>
              </div>
           </div>
           <img src={image} />
           <div className='post__footer'>
           <div className='socialaction'>
           <button>
           <FavoriteBorderIcon fontSize='small' />
           Like
           </button>
          <button>
          <ChatBubbleOutlineIcon fontSize='small'/>
          Comment
          </button>
          <button>
          <ChatBubbleOutlineIcon fontSize='small'/>
          Send
          </button>
           </div>
 
           </div>
           <SimplePaper className='commentsection' />
        </div>
     

    </div>
  );
}

export default Post;