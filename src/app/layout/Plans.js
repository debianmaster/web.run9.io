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
<section class="section section-light-grey is-medium">
  <div class="container">
    <div class="title-wrapper huge-pb">
      <h2 class="title section-title has-text-centered pb-20">Choose a plan that fits you.</h2><h3 class="subtitle is-5 has-text-centered">simple pricing.</h3></div>

    <div class="columns mt-80"><div class="column is-one-third">
        <div class="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
          <div class="card-title">
            <h4>hobbyist</h4>
          </div>
          <div class="card-icon">
            <img src="http://run9io-prod.apps.run9.io/img/illustrations/icons/mouse-globe.svg"/>
          </div>
          <div class="card-text is-large">
            <p>With 5 USD  for 1GB/1CPU this plan is ideal for hobbists.</p>
          </div>
          <div class="card-action">
            <a href="javascript:void(0)" data-cb-type="checkout" class="button btn-align-md primary-btn raised" data-cb-plan-id="free-starter" >Free Trial</a>
            
          </div>
        </div>
      </div><div class="column is-one-third">
        <div class="feature-card is-bordered has-text-centered revealOnScroll delay-2" data-animation="fadeInLeft">
          <div class="card-title">
            <h4>Startups plan</h4>
          </div>
          <div class="card-icon">
            <img src="http://run9io-prod.apps.run9.io/img/illustrations/icons/laptop-cloud.svg"/>
          </div>
          <div class="card-text is-large">
            <p>With 25 USD  for 5GB/5CPU this plan is ideal for startups.</p>
          </div>
          <div class="card-action">
            <a href="javascript:void(0)" data-cb-type="checkout" class="button btn-align-md primary-btn raised" data-cb-plan-id="free-starter" >Free Trial</a>
            
          </div>
        </div>
      </div><div class="column is-one-third">
        <div class="feature-card is-bordered has-text-centered revealOnScroll delay-3" data-animation="fadeInLeft">
          <div class="card-title">
            <h4>Enterprise plan</h4>
          </div>
          <div class="card-icon">
            <img src="http://run9io-prod.apps.run9.io/img/illustrations/icons/plug-cloud.svg"/>
          </div>
          <div class="card-text is-large">
            <p>1GB/1CPU per 5 USD at any scale plus awesome support.</p>
          </div>
          <div class="card-action">
            <a href="javascript:void(0)" data-cb-type="checkout" class="button btn-align-md primary-btn raised" data-cb-plan-id="free-starter" >Free Trial</a>
            
          </div>
        </div>
      </div></div>
  </div>
</section>
    )
    }
}

export default Header