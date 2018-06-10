import React from 'react'
import { Button } from 'reactbulma'
import Intro from './Intro'
import Plans from './Plans'
class Content extends React.Component {

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
<div>        
<Intro/>
<Plans/>
</div>
    )
  }
}
export default Content