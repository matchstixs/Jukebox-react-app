import React from 'react';
import './css/Playlist.css';
import Controls from './Controls.js';

const Playlist = ({user}) => {
    return (
        <div>

        <div className='playlist-component'>
            <h1>Playlist for {user}</h1>
            {/* playlist description */}
            {/* playlist title */}

            {/* playlist songs */}
        </div>

        <div className='controls-component'>
        < Controls />
        </div>

        </div>
    )
}

export default Playlist