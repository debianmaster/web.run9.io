import React from 'react'
import { section,figure } from 'reactbulma'
import Plan from '../../components/Plan';

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
          <section class="section section-light-grey is-medium" id="plans">
            <div class="container">
              <div class="title-wrapper huge-pb">
                <h2 class="title section-title has-text-centered pb-20">Choose a plan that fits you.</h2><h3 class="subtitle is-5 has-text-centered">simple pricing.</h3>
              </div>
              <div class="columns mt-80">
                  <Plan/>
              </div>
            </div>
          </section>
    )
  }
}

export default Header