import React from 'react'
import { section } from 'reactbulma'

class Features extends React.Component {

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
        <div id="preloader">
            <div id="status"></div>
        </div> 
    )
  }
}

export default Features