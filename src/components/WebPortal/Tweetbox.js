import React from "react";
import "./Tweetbox.css";
import { Avatar, button } from "@mui/material";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { app, database } from "../../firebaseConfig.js";

function Tweetbox({ image,uid }) {
  const [query, setQuery] = useState("");
  function handleQueryChange(e) {
    setQuery(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const docToUpdate = doc(database, "posts", "yOVHZyHgG3Mai46PCvAF");
    try {
      await updateDoc(docToUpdate, {
        [uid]: arrayUnion(query),
      });
      setQuery("");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="tweetbox">
      <form className="formclass">
        <div className="tweetbox__input">
          <Avatar src={image} />
          <input
            placeholder="what's happening?"
            type="text"
            onChange={handleQueryChange}
          />
        </div>
        <input
          className="tweetbox__imageinput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <div className="uploadfile">
          <label for="myfile">Select files:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            multiple
            className="selectfile"
          />
        </div>
        <button className="tweetbox__tweetbottom" onClick={handleSubmit}>
          Post
        </button>
      </form>
    </div>
  );
}

export default Tweetbox;
