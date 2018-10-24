import React, { Component } from 'react';

class MoreMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      bgMoreColor: 'white',
      moreClicked: true,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMoreClass
  }

  toggleMoreClass() {
    this.setState({
        moreClicked: !(this.state.moreClicked)
    })
    if (this.state.moreClicked === true) {
        this.setState({
            bgMoreColor: 'orange',
            
        })
    } else {
        this.setState({
            bgMoreColor: 'white',
        
        })
    }
}
  
  showMenu(event) {
    event.preventDefault();
    this.toggleMoreClass()
    this.setState({ 
        showMenu: true,
        moreClicked: !(this.state.moreClicked) 
    
    }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
          <span>
        <button style={{backgroundColor:this.state.bgMoreColor}} onClick={this.showMenu}>
          ...More
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
                <button> Add to Next up </button>
                <button> Add to playlist </button>
                <button> Station </button>
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