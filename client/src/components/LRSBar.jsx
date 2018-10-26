import React from 'react';
import MoreMenu from './MoreMenu.jsx';
import { sampleSongs } from '../sampleData'
import axios from 'axios';

class LRSBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            likes: 0,
            reposts: 0,
            plays: 0,
            bgLikeColor: 'white',
            bgRepostColor: 'white',
            likeClicked: true,
            repostClicked: true,
            isLiked: true,
            isReposted: true,
            currentSong: sampleSongs[0]
        })
        this.toggleRepostClass = this.toggleRepostClass.bind(this);
        this.toggleLikeClass = this.toggleLikeClass.bind(this);
        this.postSongs = this.postSongs.bind(this);
        this.nextSong = this.nextSong.bind(this);
    }

    // componentDidMount () {
        
    //     this.setState({
    //         isLiked: 'Like',
    //         isReposted: 'Repost'
    //     })
    // }

    postSongs () {
        for (var i = 0; i < sampleSongs.length; i++) {
            let template = sampleSongs[i]
            axios.post('/api', template)
                .then(data=>console.log(data))
                .catch(err=>console.error(err))
        }
    }

    nextSong () {
        
        axios.get('/api')
        .then(res => {
        const index = Math.floor(Math.random() * 5) + 1
        const song = res.data[index]
        console.log(song)
        this.setState({ 
            currentSong: song
         });
      })
    }


    toggleLikeClass() {
        this.setState({
            likeClicked: !(this.state.likeClicked)
        })
        if (this.state.likeClicked === true) {
            this.setState({
                bgLikeColor: 'orange',
                isLiked: 'Liked'
            })
        } else {
            this.setState({
                bgLikeColor: 'white',
                isLiked: 'Like'
            })
        }
        
    }
    
    toggleRepostClass() {
        this.setState({
            repostClicked: !(this.state.repostClicked)
        })
        if (this.state.repostClicked === true) {
            this.setState({
                bgRepostColor: 'orange',
                isReposted: 'Reposted'
            })
        } else {
            this.setState({
                bgRepostColor: 'white',
                isReposted: 'Repost'
            })
        }

    }


    render () {
        return (
            <div  className= 'nav-bar'>
                <button style={{backgroundColor:this.state.bgLikeColor}} onClick ={this.toggleLikeClass} id = 'like-button' ><img src='data:image/png;base64,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' width="10" height="10"/> {this.state.isLiked}</button>
                <button style={{backgroundColor:this.state.bgRepostColor}} onClick ={this.toggleRepostClass} id = 'repost-button'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX///+Li4uEhISenp6VlZXp6eni4uLa2trIyMiIiIjx8fGBgYHe3t6FhYXt7e2ioqKoqKi0tLTR0dH4+Ph6enrDw8OwsLC9vb2Xl5f4TJixAAADzElEQVR4nO3d3XLaMBRFYclAQDgGQwLh/Z+0pplpOxALnZ8ta6Z7XScZvh7bsgs2ITDGGGOMMcYYY4wxxhhjjDHGGGOMMcbY/9hhV/yjm9vKv+N4vWwPQOA+9eXE9z4hGrouXc8fKGCKImIElbrhtAcBo4T4BiNOyH5031q/gSIibop3Y/eFATYzxRiHtecY/wJlU+yQxNSdIcB2NtTplVwgwIamGJ12xn1MD3+4oSl6EB8nKCVip9jb98WfgE1N0XpE/RnY0KKR1hhgQ1McTLviPLChKfaGk9QcsJ3DTbqCgO1sqOohvgI2M8V0UgKfFnobEXkxpQO+nKCUiJtit4UBG5mi5lhTCmxk0ZBvpuXANqYoPppKgE1MUbojyoAtHG4G2aWwFNjAhipbEeXA5aeYRgmwYKF/TjTFTteQEa4EQMUEhcTDm65zhlh+kagFiojKDpntu1ioB1YgbhyEFiCe6CC0AeFEu9AKRBPNQjsQTLQKPYBYolGoW+irEm1CnwliiSahHxBItAg9gTiiQegLhBH1wkM/f7afgwyzv/Xp9d6sk/B9O9v7OgPczf8e5DM9Huelz2WEHfLzVz9VX7hxfPUlUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoqyWhy33AT9UWfpznb+LY5e7lzt000pQwXD419+NPr2au/sUD3epvpTvfx0qk9OKxJwvsh67El8BFjjSOxNfAZY6lbsQC4EKrhRMxxYJHDy20HroQSya43IrvQCwDLndOYyYWAhc8azMSS4FLnpeaiMXARc+8DcRy4LL3AauJAmBOOJyVz3sq/5dREiXAcMv8ofn78fP1+csZM7Foof/TyvdpC991UKJogiGMCGFETlEIDF8QIXCKUmDIPQXOUv+GIYqB2f/fshEhU5QDQ4A9NhYxRQ0wHDE7YkRMUQWE7YjR/3CjA4YPnNB5irKF/p8wK+J3nlNUTnBqA30ivhtRD0Qea6LfFC1A7BCdFg0TMIQT8GDjs6EagSEggR5TNAPBX6JinqId6P5+0GO2w40HcNoVwV9LZSCqF/qHRvD3p6mJPhO8d2pzX/QDTqfgLe6LnsBp5Y/YdVGxaPgCw31LRZ7AyTdUd+A0xiPSKJ0iADi1vw5DI1f9GGC4f6ZnTN3ERCQiooC/22wv1/EI+ObtW/n7WbvaD4hljDHGGGOMMcYYY4wxxhhjjDHGGGOMsTb6Bfm/XHk2HH9xAAAAAElFTkSuQmCC' width="10" height="10"/>{this.state.isReposted}</button>
                <button id = 'share-button'><img src = 'https://cdn.shopify.com/s/files/1/0099/9562/products/274_Hero_Social_Sharing_Button_2048x2048.jpg?v=1475281658' width="20" height="10"/> Share </button>
                <span style = {{display: 'inline-block'}}><MoreMenu/> </span>
                <span style ={{color: '#8c8c8c'}}><img src='http://measuremenow.com/assets/images/play_button_grey.png' width="15" height="18"/> {this.state.plays}</span>
                <span style ={{color: '#8c8c8c'}}><img src='data:image/png;base64,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' width="25" height="25"></img>{this.state.likes}</span>
                <span style ={{color: '#8c8c8c'}}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX///+Li4uEhISenp6VlZXp6eni4uLa2trIyMiIiIjx8fGBgYHe3t6FhYXt7e2ioqKoqKi0tLTR0dH4+Ph6enrDw8OwsLC9vb2Xl5f4TJixAAADzElEQVR4nO3d3XLaMBRFYclAQDgGQwLh/Z+0pplpOxALnZ8ta6Z7XScZvh7bsgs2ITDGGGOMMcYYY4wxxhhjjDHGGGOMMcbY/9hhV/yjm9vKv+N4vWwPQOA+9eXE9z4hGrouXc8fKGCKImIElbrhtAcBo4T4BiNOyH5031q/gSIibop3Y/eFATYzxRiHtecY/wJlU+yQxNSdIcB2NtTplVwgwIamGJ12xn1MD3+4oSl6EB8nKCVip9jb98WfgE1N0XpE/RnY0KKR1hhgQ1McTLviPLChKfaGk9QcsJ3DTbqCgO1sqOohvgI2M8V0UgKfFnobEXkxpQO+nKCUiJtit4UBG5mi5lhTCmxk0ZBvpuXANqYoPppKgE1MUbojyoAtHG4G2aWwFNjAhipbEeXA5aeYRgmwYKF/TjTFTteQEa4EQMUEhcTDm65zhlh+kagFiojKDpntu1ioB1YgbhyEFiCe6CC0AeFEu9AKRBPNQjsQTLQKPYBYolGoW+irEm1CnwliiSahHxBItAg9gTiiQegLhBH1wkM/f7afgwyzv/Xp9d6sk/B9O9v7OgPczf8e5DM9Huelz2WEHfLzVz9VX7hxfPUlUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoqyWhy33AT9UWfpznb+LY5e7lzt000pQwXD419+NPr2au/sUD3epvpTvfx0qk9OKxJwvsh67El8BFjjSOxNfAZY6lbsQC4EKrhRMxxYJHDy20HroQSya43IrvQCwDLndOYyYWAhc8azMSS4FLnpeaiMXARc+8DcRy4LL3AauJAmBOOJyVz3sq/5dREiXAcMv8ofn78fP1+csZM7Foof/TyvdpC991UKJogiGMCGFETlEIDF8QIXCKUmDIPQXOUv+GIYqB2f/fshEhU5QDQ4A9NhYxRQ0wHDE7YkRMUQWE7YjR/3CjA4YPnNB5irKF/p8wK+J3nlNUTnBqA30ivhtRD0Qea6LfFC1A7BCdFg0TMIQT8GDjs6EagSEggR5TNAPBX6JinqId6P5+0GO2w40HcNoVwV9LZSCqF/qHRvD3p6mJPhO8d2pzX/QDTqfgLe6LnsBp5Y/YdVGxaPgCw31LRZ7AyTdUd+A0xiPSKJ0iADi1vw5DI1f9GGC4f6ZnTN3ERCQiooC/22wv1/EI+ObtW/n7WbvaD4hljDHGGGOMMcYYY4wxxhhjjDHGGGOMsTb6Bfm/XHk2HH9xAAAAAElFTkSuQmCC' width="25" height="25"></img> {this.state.reposts}</span>
                <button onClick = {this.nextSong}> Next Song </button>
                <span>{this.state.currentSong['songName']}</span>


            </div>


        )
    }

}

export default LRSBar;