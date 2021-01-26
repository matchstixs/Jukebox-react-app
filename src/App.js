import { faDivide } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect} from 'react'
import Player from './components/Player'

function App() {
  // hooks can only be used within functions not class ie, [Class app extends react]
  // useState hook; useState(default state)
  // returns array of 2 values [currentState, updateState()]
  const [songs] = useState([
    // ADD SONGS TO APP
    // {
    //   title: "SONG NAME",
    //   artist: "ARTIST NAME",
    //   image_src: "IMAGE LOCATION",
    //   src: "SONG LOCATION"
    // },
    // SONG 1
    {
    title: "Fly Me To The Moon",
    artist: "Frank Sinatra",
    img_src: "./image/fly.jpeg",
    src: "./music/Fly-Me-to-The-Moon.mp3"
    },
    // SONG 2
    {
    title: "Girls Like You",
    artist: "Boyce Avenue - Maroon5 cover",
    img_src: "./image/girls.jpeg",
    src: "./music/Girls-Like-You_Maroon5_(Boyce Avenue_acoustic_cover).mp3"
    },
    // SONG 3
    {
    title: "Perfect",
    artist: "Emma Heesters & KHS - Ed Sheeran cover",
    img_src: "./image/perfect.jpeg",
    src: "./music/PERFECT_EdSheeran_(EMMA_HEESTERS_&_KHS_COVER).mp3"
    },
    // SONG 4
    {
    title: "You Are The Reason",
    artist: "Adrian Wilson - Callum Scott cover)",
    img_src: "./image/reason.jpeg",
    src: "./music/You-Are-The-Reason_Callum_Scott_(Adrian_Wilson_cover).mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // [count, setCount] = useState(default)
  const nextSongIndex = currentSongIndex >= songs.length ? 0 : currentSongIndex + 1;

  useEffect(() => {
    if (currentSongIndex + 1 > songs.length - 1) {
      return 0;
    } else {
      return currentSongIndex + 1;
    };
  }, [currentSongIndex]);

// only call this function when [ ] updates



  return(
    <div>
      <Player 
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      />
    </div>
  )


}

export default App;