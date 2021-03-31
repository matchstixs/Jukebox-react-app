import React from 'react';
import './css/Player.css';
// useSelector hook, reads redux data/store in components
import { useSelector } from 'react-redux';
// import subcomponents
import Song from './Song.js';
import Playlist from './Playlist.js';

// selector function
// written by taking state as an argument and return some part of the state value
const showUser = state => state.user.payload
// data is undefined

function Player() {
    const user = useSelector(showUser);

    return (
        <div>
            {/* <h1>Player Component for {user}</h1> */}

            <div className="whole-player">
                
            {/* <h1>Player Component for {user}</h1> */}
            <div className="song-left">
            {/* song component */}
            < Song />
            {/* ^ contains song image, song title, song info */}
            </div>

            <div className="playlist-right">
            {/* right side player component */}
            < Playlist user={user}/>
            {/* ^ contains playlist, controls */}
            </div>

            </div>


        </div>
    )
}

export default Player; 