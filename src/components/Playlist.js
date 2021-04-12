import React, { useEffect, useState } from 'react';
import './css/Playlist.css';
import Controls from './Controls.js';
import Header from './Header.js';

const Playlist = ({ user, image, spotify, playlistImage, playlistTitle, playlistTracks }) => {


  return (
    <div>

      <div className='playlist-component'>
          {/* header: search, profile_picture, username */}
          < Header user={user} image={image} spotify={spotify}/>

          {/* playlist info */}
          <div className='playlist-info'>

            {/* playlist image */}
          < img className='playlist_picture' src={ playlistImage } alt="playlist_picture" />

          {/* playlist title */}
          <h1> { playlistTitle } </h1>

          {/* playlist tracks */}


          </div>
      </div>

      <div className='controls-component'>
      < Controls />
      </div>

    </div>
)
  }

export default Playlist