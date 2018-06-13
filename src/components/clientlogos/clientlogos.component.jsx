import React, { Component } from 'react';
import clientLogoOne from '../../img/logos/clients/systek.svg';
import clientLogoTwo from '../../img/logos/clients/tribe.svg';
import './clientlogos.component.css';

class ClientLogosComponent extends Component{

    render(){
        return(
            <div className="hero-foot mb-20" id="ClientLogos">
                <div className="container">
                    <div className="tabs is-centered">
                        <ul>
                            <li>
                                <a>
                                    <img className="partner-logo" src={clientLogoOne} alt="partner-logo"/>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img className="partner-logo" src={clientLogoTwo} alt="partner-logo"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientLogosComponent;