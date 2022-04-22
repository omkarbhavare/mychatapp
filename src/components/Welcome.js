import React from "react";
import './welcome.css'


{/*Display component if user has looged out of chat room*/}
const Welcome = () => {
  return (
    <div className="welcome">
      <h1>ChatApp</h1>
      <p>
      ChatApp helps you to Chat with the people in your life.
      </p>
    </div>
  );
};

export default Welcome;
