import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

// useSelector hook, reads redux data/store in components
// selector functions, can be written by taking state as an argument and return some part of the state value

// useDispatch hook, pushes actions to components

const showUser = state => state.data
// data is undefined



function Player() {
    const users = useSelector(showUser);
        console.log(users);


    return (
        <div>
            <h1>Player Component</h1>

        </div>
    )
}

export default Player; 