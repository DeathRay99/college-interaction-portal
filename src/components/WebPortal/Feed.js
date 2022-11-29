import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import { app, database } from "../../firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";

function Feed({ auth }) {
  const [img, setImg] = useState("");
  const [UID, setUID] = useState("");
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [feeds, setFeeds] = useState([]);

  let posts = [];
  const [currPost, setCurrPost] = useState([]);
  function handleCurrPost(text) {
    setCurrPost((prev) => [text, ...prev]);
  }
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setImg(data.photoURL);
        setUID(data.uid);
        setName(data.displayName);
        setHandle(data.email.slice(0, 10));
        console.log(data.photoURL, data.displayName, data.uid);
      }
    });
  }, []);
  useEffect(() => {
    async function fetchUserDetails(key, feedData) {
      const collectionRef = collection(database, "users");
      const snap2 = await getDoc(doc(collectionRef, key));
      for (let i = 0; i < feedData.length; i++) {
        posts.push([snap2.data(), feedData[i]]);
      }
     if(posts.length>4)
      setFeeds(posts);
    }
    async function fetchData() {
      const collectionRef = collection(database, "posts");
      const snap1 = await getDoc(doc(collectionRef, "yOVHZyHgG3Mai46PCvAF"));
      for (let key in snap1.data()) {
        fetchUserDetails(key, snap1.data()[key].reverse());
      }
    }
    fetchData();
  }, []);

  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2> Home </h2>
      </div>
      <Tweetbox image={img} uid={UID} handleCurrPost={handleCurrPost} />
      
      {currPost.map((post) => {
        return (
          <Post
            text={post}
            key={Math.random()}
            avatar={img}
            displayname={`${name} (You)`}
            username={handle}
          />
        );
      })}
      <Post
        verified={true}
        displayname="Brad pitt"
        username="bradpittofficial"
        text="heyy guys just hanging out at the premeier of bullet train"
        avatar="https://pixel.nymag.com/imgs/fashion/daily/2019/12/18/brad-pitt/brad-pitt-lede.w700.h700.jpg"
        image="https://nationaltoday.com/wp-content/uploads/2022/10/69-Brad-Pitt.jpg"
      />
      {feeds.map((post) => {
        return (
          <Post
            text={post[1]}
            key={Math.random()}
            displayname={post[0].name}
            username={post[0].enroll}
            avatar={post[0].DP}
          />
        );
      })}
      <Post
        verified={true}
        displayname="Brad pitt"
        username="bradpittofficial"
        text="heyy guys just hanging out at the premeier of bullet train"
        avatar="https://pixel.nymag.com/imgs/fashion/daily/2019/12/18/brad-pitt/brad-pitt-lede.w700.h700.jpg"
        image="https://nationaltoday.com/wp-content/uploads/2022/10/69-Brad-Pitt.jpg"
      />
    </div>
  );
}

export default Feed;
