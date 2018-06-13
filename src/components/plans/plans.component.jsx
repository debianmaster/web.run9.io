import React, { Component } from 'react';
import './plans.component.css';
import icon_mouse from '../../img/illustrations/icons/mouse-globe.svg';
import iconCloudPlug from '../../img/illustrations/icons/plug-cloud.svg';
import icLappyCloud from '../../img/illustrations/icons/laptop-cloud.svg';

class PlansComponent extends Component{

    render(){

        return(
            <section className="section section-light-grey is-medium">
                <div className="container">
                    <div className="title-wrapper huge-pb">
                        <h2 className="title section-title has-text-centered pb-20">Choose a plan that fits you.</h2>
                        <h3 className="subtitle is-5 has-text-centered">simple pricing.</h3></div>
                    <div className="columns mt-80">
                        <div className="column is-one-third">
                            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
                                <div className="card-title">
                                    <h4>hobbyist</h4>
                                </div>
                                <div className="card-icon">
                                    <img src={icon_mouse} alt="globe mouse"/>
                                </div>
                                <div className="card-text is-large">
                                    <p>With 5 USD for 1GB/1CPU this plan is ideal for hobbists.</p>
                                </div>
                                <div className="card-action">
                                    <a href="/" data-cb-type="checkout" className="button btn-align-md primary-btn raised" data-cb-plan-id="free-starter">Free Trial</a>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-2" data-animation="fadeInLeft">
                                <div className="card-title">
                                    <h4>Startups plan</h4>
                                </div>
                                <div className="card-icon">
                                    <img src={icLappyCloud} alt="lappy icon"/>
                                </div>
                                <div className="card-text is-large">
                                    <p>With 25 USD for 5GB/5CPU this plan is ideal for startups.</p>
                                </div>
                                <div className="card-action">
                                    <a href="/" data-cb-type="checkout" className="button btn-align-md primary-btn raised" data-cb-plan-id="free-starter">Free Trial</a>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-3" data-animation="fadeInLeft">
                                <div className="card-title">
                                    <h4>Enterprise plan</h4>
                                </div>
                                <div className="card-icon">
                                    <img src={iconCloudPlug} alt="cloud plug"/>
                                </div>
                                <div className="card-text is-large">
                                    <p>1GB/1CPU per 5 USD at any scale plus awesome support.</p>
                                </div>
                                <div className="card-action">
                                    <a href="/" data-cb-type="checkout" className="button btn-align-md primary-btn raised" data-cb-plan-id="free-starter">Free Trial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PlansComponent;