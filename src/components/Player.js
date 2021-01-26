import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

function Player(props) {
    const audioEl = useRef(null);
    // audioEl.current == ref={audioEl}

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    // 2 functions written within SkipSong forwards + backwards
    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(
               () => {
                   let temp = props.currentSongIndex;
                   temp++;
                // FORWARDS
                   if (temp > props.songs.length -1) {
                       temp = 0;
                   };
                return temp;
               })
        } else {  
                let temp = props.currentSongIndex;
                temp--;
            // BACKWARDS
                if (temp < 0) {
                    temp = props.songs.length - 1;
                };
             return temp;
        }
    }

    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            {/* pass songs array from app.js and to run skip song function */}
            <h4>Now Playing</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
            /> 
            <p><i><strong>Next:</strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</i></p>
        </div>
    )


}
 
export default Player
