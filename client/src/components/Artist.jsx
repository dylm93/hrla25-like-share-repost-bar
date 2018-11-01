import React from 'react';

const Artist = (props) => (

    <div className = 'artist-component'>
        <img className = 'artist-art' src = {props.currentSong.albumArt} />
        <div className = 'artist-name-star'>
            <div className = 'artist-name'> {props.currentSong.artist} </div>
            <img className = 'artist-star' src = 'https://wiki.sabayon.org/images/2/2e/Star.png' />
        </div>
    </div>
                
)
    

export default Artist