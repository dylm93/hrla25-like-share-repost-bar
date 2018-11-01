import React from 'react';

class Artist extends React.Component {
    constructor (props) {
        super (props)

    this.state = ({
        artistName: 'Dillmatic'
    })
    
    }

   

    render () {
        return (
            
            <div className = 'artist-component'>
                <img className = 'artist-art' src = 'http://www.flat-e.com/flate5/wp-content/uploads/cover-960x857.jpg'/>
                <div className = 'artist-name-star'>
                    <div className = 'artist-name'> {this.state.artistName} </div>
                    <img className = 'artist-star' src = 'https://wiki.sabayon.org/images/2/2e/Star.png' />
                </div>
            </div>
                
        )
    }
}

export default Artist