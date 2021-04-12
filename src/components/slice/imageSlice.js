import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    image : []
  };

const imageSlice = createSlice({
    // action name used in 'action types'
    name: 'image',
    initialState,
    reducers: {
    setImage: (state, action) => ({
      ...state,
      payload: action.payload
    })
  }
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;