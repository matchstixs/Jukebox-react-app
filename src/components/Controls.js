import React from "react";
// materialui icons
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import { Slider, Grid } from "@material-ui/core";



const Controls = () => {
    return (
        <div>
        <div className="controls">
                {/* suffle song */}
                < ShuffleIcon className="shuffle-icon" />

                {/* previous song */}
                < SkipPreviousIcon className="previous-icon" />

                {/* play/pause song */}
                < PlayCircleOutlineRoundedIcon fontSize="large" className="play-icon" />

                {/* next song */}
                < SkipNextIcon className="next-icon" />

                {/* repeat */}
                < RepeatIcon className="repeat-icon" />
        </div>

        <div className="volume-controls">
            <Grid container spacing={2}>
                {/* volume */}
                <Grid item >
                <VolumeUpOutlinedIcon className="volume-icon"/>
                </Grid>

                {/* volume slider */}
                <Grid item xs >
                < Slider className="volume-slider"/>
                </Grid>
            </Grid>
        </div>

            
        </div>
    );
};

export default Controls