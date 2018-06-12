import React, { Component } from 'react';

class HeaderComponent extends Component{
    
    render(){
        return(
            <section className="hero is-fullheight is-default is-bold is-slanted">
                <div className="navbar-wrapper navbar-sticky">
                    <div className="hero-head">
                        <div className="container">
                            <nav className="navbar">
                                <div className="navbar-start">
                                    <a className="navbar-item" href="http://run9io-prod.apps.run9.io/">
                                        <img className="brand" src="http://run9io-prod.apps.run9.io/img/logos/fresh.svg" alt="Main navbar logo"/>
                                    </a>
                                    <a id="panel-trigger" href="#left-panel" className="navbar-item navbar-inner hamburger-btn">
                                        <span className="menu-toggle">
                                            <span className="icon-box-toggle">
                                                <span className="rotate">
                                                <i className="icon-line-top"></i>
                                                <i className="icon-line-center"></i>
                                                <i className="icon-line-bottom"></i>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <span className="navbar-toggle">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <div className="navbar-end navbar-menu">
                                    <a className="navbar-item is-tab navbar-inner" href="/">Features</a>
                                    <a className="navbar-item is-tab navbar-inner" href="/">Pricing</a>
                                    <div className="navbar-item is-drop">
                                        <a className="navbar-item is-tab navbar-inner-xs">About</a>
                                        <span className="drop-caret"><i className="fa fa-angle-down"></i></span>
                                        <div className="dropContain">
                                            <div className="dropOut">
                                                <div className="triangle"></div>
                                                <ul>
                                                    <li>Careers</li>
                                                    <li>Contact US</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="navbar-item">
                                        <a className="button cta is-large rounded secondary-btn raised">
                                        Sign up
                                        </a>
                                    </span>
                                </div>  
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeaderComponent;