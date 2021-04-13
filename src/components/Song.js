import React from "react"
import "./css/Song.css"

const Song = ({ image, title, artist, album, date }) => {

    return (
        <div className="song-component">

            {/* song title */}
            <h1 className="song-name">{title}</h1>

            {/* song image */}
            < img className="song-picture" src={ image } alt="songimg" />

            {/* song artist */}
            <h3 className="song-artist">{artist}</h3>
            
            {/* song album info */}
            <div className="album-info">
            <h4 className="album-name">Album: {album}</h4>
            <h5 className="album-date">{date}</h5>
            </div>


        </div>
    )
}

export default Song