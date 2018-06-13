import React, { Component } from 'react';
import './slider.component.css';

class SliderComponent extends Component{
    render(){
        return(
            <div className="hero-body" id="SliderComponent">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered padding-top-60">
                        <div className="column is-4 is-offset-1 has-text-left">
                            <h1 className="big-title">Cloud Native Development</h1>
                            <h2 className="subtitle is-5">Develop cloud native applications with Docker, Kuberntes and istio.</h2>
                            <br/>
                            <p className="has-text-left">
                                <a className="button cta is-large rounded primary-btn raised">Get started free</a>
                            </p>
                        </div>
                        <div className="column is-5 is-offset-2">
                            <figure className="image is-4by3">
                                <img src="http://run9io-prod.apps.run9.io/img/illustrations/worker.svg" alt="Description"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderComponent;