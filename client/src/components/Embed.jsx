import React from 'react';

const Embed = (props) => {
    return (

            <div className = 'embed-component'>
                <div className = 'embed-album-art'>
                    <img className = 'embedalbumart' src = {props.currentSong.albumArt}/>
                    <img className = 'embedalbumart' src = {props.currentSong.albumArt}/>
                </div>

            </div>
    )
    
}

export default Embed
