import React from 'react'
import { section } from 'reactbulma'

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
        <div id="preloader1">
            <div id="status"></div>
        </div>        
    )
  }
}

export default Header