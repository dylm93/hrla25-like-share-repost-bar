import React from 'react';

class Message extends React.Component {
    constructor (props) {
        super (props)

    // this.state = ({
    //     bgMessageColor: 'black',
    //     messageClicked: true
    // })
    // this.toggleMessageClass = this.toggleMessageClass.bind(this)
    }

    render () {
        return (
            <div> 
                <div className = 'message-component'>
                    
                    <h1 className = 'message-headers'>To</h1>
                    <input className = 'message-input'></input>
                    <h2 className = 'message-headers'>Write your message and add tracks</h2>
                    <div>
                        <input className = 'message-textarea'></input>
                        <div className = 'message-buttons'>
                            <button className = 'add-track-button'>Add Track</button>
                            <button className = 'send-button'>Send</button>
                        </div>
                    </div>

                </div>

            </div>
    )
    }
}

export default Message
