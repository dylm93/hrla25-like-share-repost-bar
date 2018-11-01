import React, { Component } from 'react';

class MoreMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      bgMoreColor: '#e5e5e5',
      moreClicked: true,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }


  
  showMenu(event) {
    event.preventDefault();
    this.setState({ 
        showMenu: true,
        bgMoreColor: '#ff5500'
    }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false,
        bgMoreColor: '#e5e5e5'
    }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    }
  }

  onMoreHover () {
    this.setState ({
      bgMoreColor: '#BDBDBD'
    })
  }

  onMoreLeave () {
    this.setState ({
      bgMoreColor: '#e5e5e5'
    })
  }

  render() {
    return (
      <div>
          <span>
        <button className = 'more-button' style= {{borderColor:this.state.bgMoreColor}} onMouseOver = {this.onMoreHover.bind(this)} onMouseLeave = {this.onMoreLeave.bind(this)} onClick={this.showMenu}>
          ...
        </button>
        
        {
          this.state.showMenu
            ? (
              <div 
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button className = 'nextUp'> Add to Next up </button>
                <button className = 'addToPlaylist'> Add to playlist </button>
                <button className = 'station'> Station </button>
              </div>
            )
            : (
              null
            )
        }
        </span>
      </div>
    );
  }
}

export default MoreMenu;