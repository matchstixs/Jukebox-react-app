import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header({ user, image }) {
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>

      <div className="header_right">
        <img className="profile_picture" src={image} alt="profile_picture" />
        <h4>{user}</h4>
      </div>
    </div>
  );
}

export default Header;
