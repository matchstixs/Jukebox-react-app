import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image : [],
    title : null,
    artist: null,
    album: null,
    date: null
};

const songSlice = createSlice({
  // action name used in "action types"
  name: "song",
  initialState,
  reducers: {
    setSongImage: (state, action) => ({
      ...state,
      image: action.payload
    }),
    setSongTitle: (state, action) => ({
      ...state,
      title: action.payload,
    }),
    setSongArtist: (state, action) => ({
      ...state,
      artist: action.payload
    }),
    setSongAlbum: (state, action) => ({
      ...state,
      album: action.payload
      }),
    setSongDate: (state, action) => ({
      ...state,
      date: action.payload
    }),
  }
});

export const { setSongImage, setSongTitle, setSongArtist, setSongAlbum, setSongDate } = songSlice.actions;
export default songSlice.reducer;