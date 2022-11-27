import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
function SamplePage() {
  const [test, setTest] = useState(1);
  const [img, setImg] = useState("");
  function handleClick() {
    setTest((pre) => pre + 1);
  }
  let auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        alert("Logged In");
        setImg(data.photoURL);
        console.log(data.photoURL);
      } else {
        alert("Not Logged In");
      }
    });
  }, []);
  return (
    <div>
      <h1>sample page to test routing & firebaselogin</h1>
      <img src={img} />
      <a href="#" onClick={handleClick}>
        Testing
      </a>
      {console.log(test)}
    </div>
  );
}
export default SamplePage;
