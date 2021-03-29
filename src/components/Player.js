import React from 'react'
import { useSelector } from 'react-redux';

// useSelector hook, reads redux data/store in components
// selector functions, can be written by taking state as an argument and return some part of the state value

// pass store, global variable, username; to player

const showUser = state => state.user.payload
// data is undefined

function Player() {
    const user = useSelector(showUser);

    return (
        <div>
            <h1>Player Component for {user}</h1>

        </div>
    )
}

export default Player; 