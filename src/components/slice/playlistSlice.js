import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: [],
  title: null,
  tracks: [],
};

const playlistSlice = createSlice({
  // action name used in 'action types'
  name: "playlist",
  initialState,
  reducers: {
    setPlaylistData: (state, action) => {
      const data = action.payload;
      state.image = data.images[0].url;
      state.title = data.name;
      state.tracks = data.tracks.items;
    },
  },
});

export const { setPlaylistData } = playlistSlice.actions;
export default playlistSlice.reducer;
