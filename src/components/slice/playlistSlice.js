import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image : [],
    title : null,
    track: null
};

const playlistSlice = createSlice({
  // action name used in "action types"
  name: "playlist",
  initialState,
  reducers: {
    setPlaylistImage: (state, action) => ({
      ...state,
      image: action.payload
    }),
    setPlaylistTitle: (state, action) => ({
      ...state,
      title: action.payload,
    }),
    setPlaylistTracks: (state, action) => ({
      ...state,
      tracks: action.payload
    }),
  }
});

export const { setPlaylistImage, setPlaylistTitle, setPlaylistTracks } = playlistSlice.actions;
export default playlistSlice.reducer;