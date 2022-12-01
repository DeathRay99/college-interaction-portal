import React from "react";
import "./Tweetbox.css";
import { Avatar, button } from "@mui/material";
import { useState } from "react";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app, database, storage } from "../../firebaseConfig.js";

function Tweetbox({ image, uid, handleCurrPost }) {
  const [query, setQuery] = useState("");
  const [imgData, setImgData] = useState({});
  let inputImgURL="";
  function handleQueryChange(e) {
    setQuery(e.target.value);
  }
  function handleFileUpload(e){
    e.preventDefault();
    console.log(imgData);
    const storageRef = ref(storage, imgData.name);
    const uploadTask = uploadBytesResumable(storageRef, imgData);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
         inputImgURL=downloadURL;
         console.log(inputImgURL)
        });
      }
    );
  }
  async function handleSubmit(e) {
    e.preventDefault();
    
    // console.log(downloadURL);
    const docToUpdate = doc(database, "posts", "yOVHZyHgG3Mai46PCvAF");
    try {
      await updateDoc(docToUpdate, {
        [uid]: arrayUnion({post:query,img:inputImgURL}),
      });
      handleCurrPost(query);
      setQuery("");
      setImgData({});
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
            value={query}
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
            onChange={(e) => setImgData(e.target.files[0])}
          />
          <button onClick={handleFileUpload}>upload file</button>
        </div>
        <button className="tweetbox__tweetbottom" onClick={handleSubmit}>
          Post
        </button>
      </form>
    </div>
  );
}

export default Tweetbox;
