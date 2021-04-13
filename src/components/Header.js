import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header({ user, image }) {
    return (
        <div className="header">
            <div className="header-left">
            <SearchIcon />
            <input type="text" placeholder="Search" />
            </div>

            <div className="header-right">
            < img className="profile-picture" src={ image } alt="profileimg" />
            <h4>{ user }</h4>
            </div>
        </div>
    )
}

export default Header
