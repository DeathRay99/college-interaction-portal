import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import { app, database } from "../../firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";

function Feed({ auth }) {
  const [userInfo, setUserInfo] = useState({});
  const [feeds, setFeeds] = useState([]);

  let posts = [];
  const [currPost, setCurrPost] = useState([]);
  function handleCurrPost(text) {
    setCurrPost((prev) => [text, ...prev]);
  }
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUserInfo({
          img: data.photoURL,
          UID: data.uid,
          name: data.displayName,
          handle: data.email.slice(0, 10),
        });
        console.log(
          data.photoURL,
          data.displayName,
          data.uid,
          data.email.slice(0, 10)
        );
      }
    });
    async function fetchUserDetails(key, feedData) {
      const collectionRef = collection(database, "users");
      const snap2 = await getDoc(doc(collectionRef, key));
      for (let i = 0; i < feedData.length; i++) {
        posts.push([snap2.data(), feedData[i]]);
      }
      console.log(posts);
      if (posts.length > 4) setFeeds(posts);
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
      <div className="feed__header">
        <h2> Home </h2>
      </div>
      <Tweetbox
        image={userInfo.img}
        uid={userInfo.UID}
        handleCurrPost={handleCurrPost}
      />

      {currPost.map((post) => {
        return (
          <Post
            text={post}
            key={Math.random()}
            avatar={userInfo.img}
            displayname={`${userInfo.name} (You)`}
            username={userInfo.handle}
          />
        );
      })}
      {feeds.map((post) => {
        return (
          <Post
            verified={post[0].type === "teacher" ? true : false}
            text={post[1].post}
            key={Math.random()}
            displayname={post[0].name}
            username={post[0].enroll}
            avatar={post[0].DP}
            image={post[1].img}
          />
        );
      })}
    </div>
  );
}

export default Feed;
