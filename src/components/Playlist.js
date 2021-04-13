import React from "react";
import "./css/Playlist.css";
import Controls from "./Controls.js";
import Header from "./Header.js";



const Playlist = ({ user, image, spotify, playlistImage, playlistTitle, playlistTracks }) => {

  return (
    <div className="playlist-component">
      {/* header: search, profile_picture, username */}
      < Header user={user} image={image} spotify={spotify}/>

      {/* playlist info */}
      <div className="playlist-info">

        {/* playlist title */}
        <h3 className="playlist-title"> { playlistTitle } </h3>

        {/* playlist image */}
        <img className="playlist-picture" src={ playlistImage } alt="playlist_picture" />

        {/* playlist tracks */}
        <div className="playlist-tracks">
          <ol>
          {playlistTracks?.map(function(data, index){
            return (<li key={index}>{data.track.name}</li>)
          })}
          </ol>
        </div>

      </div>

      <div className="controls-component">
      < Controls />
      </div>

    </div>
  )
};

export default Playlist;