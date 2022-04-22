import React from "react";
import { ContextProvider } from "../context/ContextProvider";

{/*Navbar Section */}
const Navbar = () => {
  const { register, user, loader, logout } = React.useContext(ContextProvider);

  {/*To Authenticate & Login User*/}
  const userRegister = () => {
    register();
  };

  {/*LogOut USer*/}
  const userLogout = () => {
    logout();
  };

  {/*If User is login display following navbar*/}
  const checkUser = () => {
    return !loader ? (
      user ? (
        <div className="navbar__links">
          <li>
            <span className="navbar__img">
              <img src={user.photoURL} alt="user" />
            </span>
          </li>
          <li>
            <button className="navbar__btn" onClick={userLogout}>
              Logout
            </button>
          </li>{" "}
        </div>
      ) : 
      {/*If user if logout Display following Navbar*/}
      (
        <div className="navbar__links">
          <li>
            <button className="navbar__btn" onClick={userRegister}>
              Login With Google
            </button>
          </li>
        </div>
      )
    ) : (
      "..."
    );
  };

  {/*Navbar Component*/}
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">ChatApp</div>
        {checkUser()}
      </div>
    </div>
  );
};

export default Navbar;
