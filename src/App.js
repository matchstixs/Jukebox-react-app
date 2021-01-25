import { faDivide } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from 'react'
import Player from './components/Player'

function App() {
  const [songs] = useState([
    // ADD SONGS TO APP
    // {
    //   title: "SONG NAME",
    //   artist: "ARTIST NAME",
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
    src: "./music/Girls-Like-You_ Maroon5_(Boyce Avenue_acoustic_cover).mp3"
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
    }]
  )

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return(
    <div>
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  )







}

export default App;