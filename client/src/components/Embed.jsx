import React from 'react';

class Embed extends React.Component {
    constructor (props) {
        super (props)

    // this.state = ({
    //     bgEmbedColor: 'black',
    //     embedClicked: true
    // })
    // this.toggleEmbedClass = this.toggleEmbedClass.bind(this)
    }

    render () {
        return (
            <div className = 'embed-component'>
            
                <span><img className = 'albumart' src = 'http://www.flat-e.com/flate5/wp-content/uploads/cover-960x857.jpg'/></span>


            </div>
    )
    }
}

export default Embed
