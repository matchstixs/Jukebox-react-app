import React from 'react';
import './css/Volume.css'
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import { Slider } from '@material-ui/core';

function Volume() {
    return (
        <div>
            
        <div className="volume-component">
            <VolumeUpOutlinedIcon />
        </div>

        <div className="volume-slider">
            < Slider />
        </div>

        </div>
    )
}

export default Volume
