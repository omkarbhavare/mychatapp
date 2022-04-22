import React from "react";
import Welcome from "./Welcome";
import Chat from "./Chat";
import { ContextProvider } from "../context/ContextProvider";


/*Home Component to display Welcome if user has not loggedin 
& display Chat if user has loggedin */

const Home = () => {
  const { loader, user } = React.useContext(ContextProvider);
  return (
    <div>{!loader ? user ? <Chat /> : <Welcome /> : "loading..."}</div>
  );
};

export default Home;

