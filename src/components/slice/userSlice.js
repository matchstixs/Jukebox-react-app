// slices are global states
import { createSlice } from "@reduxjs/toolkit";

// const [user, setUser] = useState([])
// [state of user, state.name.push(action.name)] = initialState([])
// setUser(action)

// store global state
const initialState = {
  user: null,
  weeklyPlaylist: null,
  spotify: null,
  top_artists: null,
  playing: false,
  item: null,
};

// createSlice(), generate actions, action creators, reducer
// actions, object with type field, describes something that happens in application
// action creators, function that creates and returns action object
// reducer function that responds to all the action types

// const action creator = slice
const userSlice = createSlice({
  // action name used in 'action types'
  name: "user",
  initialState,
  // write an object that has some reducer functions in it
  // reducers, function that recieves current state and action object, aka event listener
  // Check to see if the reducer cares about this action
  // If so, make a copy of the state, update the copy with new values, and return it
  reducers: {
    // action (state, action)
    // state: current state of 'todo'
    // action:  action being executed [payload]
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSpotify: (state, action) => {
      state.spotify = action.spotify;
    },
    setDiscoverWeekly: (state, action) => {
      state.weeklyPlaylist = action.payload;
    },
    setPlaylists: (state, action) => {
      state.payload = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const {
  setUser,
  setSpotify,
  setDiscoverWeekly,
  setPlaylists,
  setPlaying,
  setItem,
} = userSlice.actions;
export default userSlice.reducer;
