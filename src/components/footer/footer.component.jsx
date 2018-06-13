import React, { Component } from 'react';
import icFreshWhite from '../../img/logos/fresh-white.svg';

class FooterComponent extends Component{

    render(){
        return(
            <footer className="footer footer-dark">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="footer-logo">
                                <img src={icFreshWhite}/>
                            </div>
                        </div>
                        <div className="column">
                            <div className="footer-column">
                                <div className="footer-header">
                                    <h3>Product</h3>
                                </div>
                                <ul className="link-list">
                                    <li>
                                        <a href="/">Discover features</a>
                                    </li>
                                    <li>
                                        <a href="/">Why choose our Product?</a>
                                    </li>
                                    <li>
                                        <a href="/">Compare features</a>
                                    </li>
                                    <li>
                                        <a href="/">Our Roadmap</a>
                                    </li>
                                    <li>
                                        <a href="#">Request features</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="column">
                            <div className="footer-column">
                                <div className="footer-header">
                                    <h3>Docs</h3>
                                </div>
                                <ul className="link-list">
                                    <li>
                                        <a href="#">Get Started</a>
                                    </li>
                                    <li>
                                        <a href="#">User guides</a>
                                    </li>
                                    <li>
                                        <a href="#">Admin guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Developers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="column">
                            <div className="footer-column">
                                <div className="footer-header">
                                    <h3>Blogroll</h3>
                                </div>
                                <ul className="link-list">
                                    <li>
                                        <a href="#">Latest News</a>
                                    </li>
                                    <li>
                                        <a href="#">Tech articles</a>
                                    </li>
                                    <li>
                                        <a href="#">Video Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="column">
                            <div className="footer-column">
                                <div className="footer-header">
                                    <h3>Follow Us</h3>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                            <a className="level-item" href="https://github.com/run9io">
                                                <span className="icon">
                                                    <i className="fa fa-github"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" href="https://facebook.com/run9io">
                                                <span className="icon">
                                                    <i className="fa fa-facebook"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" href="https://twitter.com/run9io">
                                                <span className="icon">
                                                    <i className="fa fa-twitter"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;