import React from 'react'

function PlayerDetails(props) {

    return (
        <div className="c-player-details">
            <div className="c-detail--img">
            <img src={props.song.img_src} alt="404"/>
            </div>
            <h3 className="c-detail--title">{props.song.title}</h3>
            <h4 className="c-detail--artist">{props.song.artist}</h4>
        </div>
    )



}
export default PlayerDetails
