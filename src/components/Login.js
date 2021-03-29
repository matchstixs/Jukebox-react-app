import React, { useState } from 'react';
import { loginUrl } from '../spotify'
import { useDispatch } from 'react-redux'
import { setUser } from '../slice.js'

// actions need to be dispatched to store

function Login() {
    const [{user, setUser}] = useState('');
    const dispatch = useDispatch();
    
    const userLogin = () => {
        console.log(`logging in as ${user}`);

        dispatch(setUser({
            user: user.display_name
        }))
    }

    return (
        <div className="login">

            {/* spotify logo */}
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
            alt="spotify logo"
            className="spotify-login-logo">
            </img>

            {/* login with spotify button */}
            <a href={loginUrl} onClick={userLogin} className="login-button">LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;