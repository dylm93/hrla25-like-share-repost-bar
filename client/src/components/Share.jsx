import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import SocialMediaShare from './SocialMediaShare.jsx';
import Embed from './Embed.jsx';
import Message from './Message.jsx';
import NavBar from 'react-bootstrap';

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
            bgMessageColor: 'black',
            width: '525',
            height: '425'
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
          bgMessageColor: 'black',
          
        });
      }

    onMessageClick() {
        this.setState({
          showMessageComponent: true,
          showSocialMediaComponent: false,
          showEmbedComponent: false,
          bgMessageColor: '#ff5500',
          bgShareColor: 'black',
          bgEmbedColor: 'black',
          
        });
      }

    onEmbedClick() {
        this.setState({
          showEmbedComponent: true,
          showSocialMediaComponent: false,
          showMessageComponent: false,
          bgEmbedColor: '#ff5500',
          bgMessageColor: 'black',
          bgShareColor: 'black',
          

        });
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

    render() {
        return (
            <div>
                <button display = 'inline-block' className = 'share-button' onClick={() => this.openModal()} ><img src = 'https://cdn.shopify.com/s/files/1/0099/9562/products/274_Hero_Social_Sharing_Button_2048x2048.jpg?v=1475281658' width ='20' height = '15'  /></button>
                
                <Modal className = 'share-modal' visible={this.state.visible} width={this.state.width} height={this.state.height} effect="fadeInDown" onClickAway={() => this.closeModal()}>
                    <div className = 'share-embed-message'>
                        <div className = 'sem'>
                            <div className = 'socialmediashare' style={{color :this.state.bgShareColor}} onClick={this.onShareClick}>Share</div>                      
                            <div className = 'embed' style={{color :this.state.bgEmbedColor}} onClick={this.onEmbedClick}> Embed </div>
                            <div className = 'message' style={{color :this.state.bgMessageColor}} onClick={this.onMessageClick}>Message</div>
                        </div>

                        {this.state.showSocialMediaComponent ?
                            <SocialMediaShare /> :
                            null
                            }  

                        {this.state.showEmbedComponent ?
                            <Embed /> :
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

