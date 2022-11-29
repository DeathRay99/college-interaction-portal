import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import { app, database } from "../../firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";

function Feed({ auth }) {
  // const [posts, setposts] = useState([]);

  // useEffect(() => {
  //   db.collection('posts').onSnapshot(snapshot => (
  //     setposts(snapshot.docs.map(doc => doc.data()))
  //     ) )
  // },[]  )
  const [img, setImg] = useState("");
  const [UID, setUID] = useState("");
  const [feeds, setFeeds] = useState([]);
  const collectionRef = collection(database, "posts");
  let posts = [];
  let mergedPosts = [];
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setImg(data.photoURL);
        setUID(data.uid);
        console.log(data.photoURL, data.displayName, data.uid);
      }
    });
  }, []);
  useEffect(() => {
    async function fetchData() {
      const snap = await getDoc(doc(collectionRef, "yOVHZyHgG3Mai46PCvAF"));
      for (let key in snap.data()) {
        posts.push(snap.data()[key].reverse());
      }
      console.log(posts);
      for (let i = 0; i < posts.length; i++) {
        mergedPosts = mergedPosts.concat(posts[i]);
      }
      setFeeds(mergedPosts);
    }
    fetchData();
  }, []);

  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2> Home </h2>
      </div>

      {/* post */}
      <Tweetbox image={img} uid={UID} />
      {/* post */}
      {/* {posts.map(post => (
        <Post 
        displayname={post.displayname}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
       /> */}

      {/* ))} */}
      <Post
        verified={true}
        displayname="Brad pitt"
        username="bradpittofficial"
        text="heyy guys just hanging out at the premeier of bullet train"
        avatar="https://pixel.nymag.com/imgs/fashion/daily/2019/12/18/brad-pitt/brad-pitt-lede.w700.h700.jpg"
        image="https://nationaltoday.com/wp-content/uploads/2022/10/69-Brad-Pitt.jpg"
      />
      {feeds.map((post) => {
        return <Post text={post} key={Math.random()} />;
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
