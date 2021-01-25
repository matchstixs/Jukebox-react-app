import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

function Player(props) {
    // const audioEl = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(false);

    // useEffect(() => {
    //     if (isPlaying) {
    //         audioEl.current.play();
    //     } else {
    //         audioEl.current.pause();
    //     }
    // })

    // const SkipSong = (forwards = true) => {
    //     if (forwards) {
    //         props.setCurrentSongIndex(() => {
    //             let temp = props.currentSongIndex;
    //             temp++;
    //         });
    //     }
    //     else {
    //         props.setCurrentSongIndex(() => {
    //             let temp = props.currentSongIndex;
    //             temp--;
    //         });
    //     };
    // }

    return (
        <div className="c-player">
            <audio></audio>
            <h4>Playing Now</h4>
            <PlayerDetails song={props.song} />
            <PlayerControls /> 
            <p><i><strong>Next:</strong> {props.nextSong.title} by {props.nextSong.artist}</i></p>
        </div>
    )
}
 
export default Player
