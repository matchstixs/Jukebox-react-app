import { configureStore } from "@reduxjs/toolkit";
// import individual reducer functions
import userReducer from "./components/slice/userSlice.js"
import imageReducer from "./components/slice/imageSlice.js"
import playlistReducer from "./components/slice/playlistSlice.js"
import songReducer from "./components/slice/songSlice.js"

export default configureStore({
  reducer: {
    // state: reducer function
    user: userReducer,
    image: imageReducer,
    playlist: playlistReducer,
    song: songReducer
  }
});