import React from 'react'
import "./Widgets.css"
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton,  TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets' >
      <div className='widgets__input'>
       <SearchIcon className='widgets__searchicon' />
       <input placeholder='Search Twitter' type="text" />
      </div>
      <div className='widgets__widgetcontainer'>
      <h2>Whats Happening </h2>
      
      <TwitterTweetEmbed tweetId='933354946111705097' />

      <TwitterTimelineEmbed
       sourceType='profile'
       screenName='POTUS' 
       options={{height:400}}
      />
       
       <TwitterShareButton
        url='https://twitter.com/Amarupa7'
        options={{text : '#reactjs is awesome',via:"@Amarupa7"}}
        />
      </div>

    </div>
  );
}

export default Widgets;