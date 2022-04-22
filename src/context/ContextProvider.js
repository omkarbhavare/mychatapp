import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../config";
import firebase from "firebase";
export const ContextProvider = createContext();

const ContextFun = (props) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [allMsg, setAllMsg] = useState([]);


  {/*To authenticate user & login*/}
  const register = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        firebase.auth().signInWithRedirect(provider);
      });
  };


  {/*function to logout from chatroom*/}
  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };


  {/*Details to fetch while sending message*/}
  const sendMessage = (msg) => {
    db.collection("messages").add({
      msg,
      photo: user.photoURL,
      username: user.displayName,
      email: user.email,
      currentTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoader(false);
    });

    // Fetch message from firestore
    db.collection("messages")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        console.log("all message", snp.docs);
        setAllMsg(
          snp.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
  }, []);
  
  return (
    <ContextProvider.Provider
      value={{ register, user, loader, logout, sendMessage, allMsg }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ContextFun;
