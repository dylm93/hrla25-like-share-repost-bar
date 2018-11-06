import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import SocialMediaShare from './SocialMediaShare.jsx';
import Embed from './Embed.jsx';
import Message from './Message.jsx';


export default class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            showSocialMediaComponent: true,
            showMessageComponent: false,
            showEmbedComponent: false,
            shareClicked: true,
            bgShareColor: '#ff5500',
            bgEmbedColor: 'black',
            bgMessageColor: 'black'
        }
        this.onShareClick = this.onShareClick.bind(this)
        this.onMessageClick = this.onMessageClick.bind(this)
        this.onEmbedClick = this.onEmbedClick.bind(this)
    }
    
    onShareClick() {
        this.setState({
          showSocialMediaComponent: true, 
          showMessageComponent: false,
          showEmbedComponent: false,
          bgShareColor: '#ff5500',
          bgEmbedColor: 'black',
          bgMessageColor: 'black'
        });
        console.log(this.state.height)

      }

    onMessageClick() {
        this.setState({
          showMessageComponent: true,
          showSocialMediaComponent: false,
          showEmbedComponent: false,
          bgMessageColor: '#ff5500',
          bgShareColor: 'black',
          bgEmbedColor: 'black'
         
        });
        console.log(this.state.height)

      }

    onEmbedClick() {
        this.setState({
          showEmbedComponent: true,
          showSocialMediaComponent: false,
          showMessageComponent: false,
          bgEmbedColor: '#ff5500',
          bgMessageColor: 'black',
          bgShareColor: 'black',
          bgShareButtonColor: '#e5e5e5'
         
        });
        console.log(this.state.height, "embed height")
      }
    

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    onShareHover () {
        this.setState ({
            bgShareButtonColor: '#B5B5B5'
        })
    }

    onShareLeave () {
        this.setState ({
            bgShareButtonColor: '#e5e5e5'
        })
    }
    

    render() {
        return (
            <div>
                <button display = 'inline-block' className = 'share-button' style = {{borderColor: this.state.bgShareButtonColor}} onMouseOver = {this.onShareHover.bind(this)} onMouseLeave = {this.onShareLeave.bind(this)} onClick={() => this.openModal()} ><img src = 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-share-512.png' width ='16' height = '16'  /></button>
                
                <Modal className = 'share-modal' visible={this.state.visible} width='525' height='425' effect="fadeInDown" onClickAway={() => this.closeModal()}>
                    <div className = 'share-embed-message'>
                        <div className = 'sem'>
                            <div className = 'socialmediashare' style={{color : this.state.bgShareColor}} onClick={this.onShareClick}>Share</div>                      
                            <div className = 'embed' style={{color :this.state.bgEmbedColor}} onClick={this.onEmbedClick}> Embed </div>
                            <div className = 'message' style={{color :this.state.bgMessageColor}} onClick={this.onMessageClick}>Message</div>
                        </div>

                        {this.state.showSocialMediaComponent ?
                            <SocialMediaShare currentSong = {this.props.currentSong}/> :
                            null
                            }  

                        {this.state.showEmbedComponent ?
                            <Embed currentSong = {this.props.currentSong} /> :
                            null
                            }   
                        
                        {this.state.showMessageComponent ?
                            <Message /> :
                            null
                            }   
                            
                                                   
                                                      
                            <a href="javascript:void(0);" ></a>

                    </div>
                </Modal>
            </div>
        )

    }
}

