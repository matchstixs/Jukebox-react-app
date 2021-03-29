import { configureStore } from '@reduxjs/toolkit';
// allows for actions to return function instead of object
import thunkMiddleware from 'redux-thunk';
// import individual reducer functions
import userReducer from './slice.js';


// const exampleThunkFunction = (dispatch, getState) => {
//  const stateBefore = getState()

// store.dispatch(exampleThunkFunction)


export default configureStore({
  reducer: {
    // state: reducer function
    user: userReducer
  }, thunkMiddleware
});