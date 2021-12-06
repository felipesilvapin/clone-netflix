import React from "react";
import "./Header.css";
import NetflixLogo from "../img/logo-netflix.png";
import NetflixUser from "../img/netflix-user.png";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src={NetflixLogo} alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={NetflixUser} alt="User" />
        </a>
      </div>
    </header>
  );
};
