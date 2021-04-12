import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { getTokenFromResponse} from './spotify';
// if no {} will import slice reducer function instead
import { setUser } from './components/slice/userSlice.js';
import { setImage } from './components/slice/imageSlice.js';
import { setPlaylistTitle, setPlaylistImage, setPlaylistTracks } from './components/slice/playlistSlice.js';
import { useDispatch } from 'react-redux';
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
      // grab username and picture
      spotify.getMe().then(data => {
        // data {
        //   display_name,
        //   followers,
        //   images
        // }
        const user = data.display_name;
        const image = data.images[0].url;
        // console.log(user) 
        // console.log(image)
        dispatch(setUser(user));
        dispatch(setImage(image));
      });
      spotify.getPlaylist('37i9dQZF1DXcBWIGoYBM5M')
      .then((data) => {
      // data {
      // images[0].url
      // name
      // tracks[items]
      // }
      const playlistImage = data.images[0].url;
      const playlistTitle = data.name;
      const playlistTracks = data.tracks.items;
      // console.log(playlistImage)
      // console.log(playlistName)
      // console.log(playlistTracks)
      dispatch(setPlaylistTitle(playlistTitle));
      dispatch(setPlaylistImage(playlistImage));
      dispatch(setPlaylistTracks(playlistTracks));
      });



      // spotify.getUserPlaylists().then((playlists) => {
      // console.log(playlists)


      // dispatch(setPlaylists(playlists))
      // });
    }
  }, [token, dispatch]);



  return (
<div className="app">
      {!token && <Login />}
      {token && <Player />}
    </div>
  );
}

export default App;
