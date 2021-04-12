import React from "react";
import "./css/Player.css";
// useSelector hook, reads redux data/store in components
import { useSelector } from "react-redux";
// import subcomponents
import Song from "./Song.js";
import Playlist from "./Playlist.js";

// selector function
// written by taking state as an argument and return some part of the state value
const selectUser = state => state.user.payload
const selectImage = state => state.image.payload
const selectPlaylistTitle = state => state.playlist.title
const selectPlaylistImage = state => state.playlist.image
const selectPlaylistTracks = state => state.playlist.tracks

function Player({ spotify}) {
    const user = useSelector(selectUser);
    const image = useSelector(selectImage);
    const playlistImage = useSelector(selectPlaylistImage);
    const playlistTitle = useSelector(selectPlaylistTitle);
    const playlistTracks = useSelector(selectPlaylistTracks);

    return (
        <div>
            <div className="whole-player">
                
            {/* <h1>Player Component for {user}</h1> */}
            <div className="song-left">
            {/* song component */}
            < Song />
            {/* ^ contains song image, song title, song info */}
            </div>

            <div className="playlist-right">
            {/* right side player component */}
            < Playlist user={user} image={image} spotify={spotify} playlistImage={playlistImage} playlistTitle={playlistTitle} playlistTracks={playlistTracks} />
            {/* ^ contains playlist, controls */}
            </div>

            </div>


        </div>
    )
}

export default Player; 