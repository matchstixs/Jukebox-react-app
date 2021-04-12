import React from "react";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      {/* spotify logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
        alt="spotify logo"
        className="spotify-login-logo"
      ></img>

      {/* login with spotify button */}
      <a href={loginUrl} className="login-button">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
