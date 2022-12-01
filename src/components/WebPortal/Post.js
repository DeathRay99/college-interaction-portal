import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import SimplePaper from "./Commentsection";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { margin } from "@mui/system";
function Post({ displayname, username, verified, text, image, avatar }) {
  let auth = getAuth();
  const [handle, setHandle] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setHandle(data.email.slice(0, 10));
      }
    });
  }, []);
  const [showCmmnt, setShowCmmnt] = useState(false);
  const [cmmnts, setCmmnts] = useState([]);
  function handleClick() {
    setShowCmmnt((pre) => !pre);
  }
  function handleCmntData(comment) {
    setCmmnts((pre) => [...pre, comment]);
  }
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headertext">
            <h3>
              {displayname}{" "}
              <span className="post__headerspecial">
                {verified && <VerifiedIcon className="post__badge" />}@
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerdescription">
            <p> {text}</p>
          </div>
        </div>
        <img src={image} />
        {showCmmnt && (
          <div>
            <p style={{ fontSize: "small" ,margin:"3px 8px"}}>Comments:-</p>
            {cmmnts.map((comment) => {
              return (
                <div
                  style={{
                    border: "1px dotted black",
                    maxWidth: "620px",
                    borderRadius: "7px",
                    marginBottom: "2px",
                    padding: "7px",
                    margin: "8px 7px"
                  }}
                >
                  <b style={{ fontSize: "small", color: "grey", }}>
                    @{handle} (you) :-
                  </b>{" "}
                  {comment}
                </div>
              );
            })}
          </div>
        )}
        <div className="post__footer">
          <div className="socialaction">
            <button>
              <FavoriteBorderIcon fontSize="small" />
              upVote
            </button>
            <button onClick={handleClick}>
              <ChatBubbleOutlineIcon fontSize="small" />
              Comment
            </button>
            <button>
              <ChatBubbleOutlineIcon fontSize="small" />
              Send
            </button>
          </div>
        </div>
        {showCmmnt && (
          <SimplePaper className="commentsection" onCmntData={handleCmntData} />
        )}
      </div>
    </div>
  );
}

export default Post;
