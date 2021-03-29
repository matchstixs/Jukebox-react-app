import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { getTokenFromResponse} from './spotify';
// if no {} will import slice reducer function instead
import { setUser } from './slice.js'
import { useDispatch } from 'react-redux'
// pass components
import Login from './components/Login.js';
import Player from './components/Player.js';

// spotify constructor that allows communication to and from
const spotify = new SpotifyWebApi();

function App() {
  // state
  const [token, setToken] = useState(null);
  // useDispatch hook, pushes actions to components
  const dispatch = useDispatch()

  // react hook: useEffect()
  useEffect(() => {
    // condition
    const hash = getTokenFromResponse();
    // hide token from being viewed on public url
    window.location.hash = "";
    // parse access_token from hash object
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      // connect access token to api
      spotify.setAccessToken(_token);
      // grab username
      spotify.getMe().then(data => {
        // data {
        //   display_name,
        //   followers,
        //   images
        // }
        const name = data.display_name
        // console.log(name)
        dispatch(setUser(name))
        // console.log(setUser(name))
      })
    };
    
  }, []); 

  return (
    <div className="App">

    {/* logo image */}

    { token? (
      < Player />
    ) : (
      < Login />
    )}

    </div>
  );
}

export default App;
