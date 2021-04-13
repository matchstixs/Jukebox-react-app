import React from "react";
import "./css/Player.css";
// useSelector hook, reads redux data/store in components
import { useSelector } from "react-redux";
// import subcomponents
import Song from "./Song.js";
import Playlist from "./Playlist.js";

// selector function
// written by taking state as an argument and return some part of the state value
// HEADER COMPONENT
const selectUser = state => state.user.payload;
const selectImage = state => state.image.payload;
// PLAYLIST COMPONENT
const selectPlaylistTitle = state => state.playlist.title;
const selectPlaylistImage = state => state.playlist.image;
const selectPlaylistTracks = state => state.playlist.tracks;
// SONG COMPONENT
const selectSongImage = state => state.song.image;
const selectSongTitle = state => state.song.title;
const selectSongArtist = state => state.song.artist;
const selectSongAlbum = state => state.song.album;
const selectSongDate = state => state.song.date;

function Player({ spotify}) {
    const user = useSelector(selectUser);
    const image = useSelector(selectImage);
    const playlistImage = useSelector(selectPlaylistImage);
    const playlistTitle = useSelector(selectPlaylistTitle);
    const playlistTracks = useSelector(selectPlaylistTracks);
    const songImage = useSelector(selectSongImage);
    const songTitle = useSelector(selectSongTitle);
    const songArtist = useSelector(selectSongArtist);
    const songAlbum = useSelector(selectSongAlbum);
    const songDate = useSelector(selectSongDate);

    return (
        <div>
            <div className="whole-player">
                
            {/* <h1>Player Component for {user}</h1> */}
            <div className="song-left">
            {/* song component */}
            < Song image={songImage} title={songTitle} artist={songArtist} album={songAlbum} date={songDate} />
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