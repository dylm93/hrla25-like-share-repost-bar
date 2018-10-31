import React from 'react';

class SocialMediaShare extends React.Component {
    constructor (props) {
        super (props)

    this.state = ({
    })
    
    }

   

    render () {
        return (
            <div>

                <h1 className = 'share-title'>Share</h1>
                <div className = 'share-element'>
                    <div className = 'sm'>
                        <span><img className = 'twitter' src = 'http://www.charlottemi.org/wp-content/uploads/2018/01/Official-Twitter-button-square.png'/></span>
                        <span><img className = 'facebook' src = 'http://icons-for-free.com/icon/download-facebook_social_icon-293782.png'/></span>
                        <span><img className = 'tumblr' src = 'https://pbs.twimg.com/profile_images/1012382485596946433/hmiOHCAP_400x400.jpg'/></span>
                        <span><img className = 'googleplus' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__f_TBiNfQHoB98cNzdendWiDxx55oQX7AGOU_PDxOp0_HAWy'/></span>
                        <span><img className = 'pinterest' src = 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Pinterest_Shiny_Icon.svg'/></span>
                        <span><img className = 'email' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODrDZ-3qr3EroIPSHBK2vk5y-BI6CMRQI1iFfJUJPai3XTy0'/></span>
                    </div>
                
                </div>
                <div className = 'soundcloud-link'>
                        <input className = 'input'></input>
                </div>

                
            </div>
    )
    }
}

export default SocialMediaShare
