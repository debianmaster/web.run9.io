import React, { Component } from 'react';
import './sidemenu.component.css';

class SidemenuComponent extends Component{

    render(){
        return(
            <div id="left-panel">
                <div className="left-menu-wrapper">
                    <div className="panel-header">
                        <img className="panel-logo" src="http://run9io-prod.apps.run9.io/img/logos/fresh-square.svg"/>
                        <div id="panel-close" className="delete is-medium float-right"></div>
                    </div>
                    <div className="menu">
                        <p className="menu-label">
                            <i className="im im-icon-Cloud"></i> Menu title
                        </p>
                        <ul className="menu-list">
                            <li>
                                <a className="side-menu-item is-expandable">Menu item <i className="sl sl-icon-arrow-down end-icon"></i></a>
                                <ul className="sidebar-submenu display-none">
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="side-menu-item is-expandable">Menu item <i className="sl sl-icon-arrow-down end-icon"></i></a>
                                <ul className="sidebar-submenu display-none">
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                </ul>
                            </li>
                        </ul>
                        <p className="menu-label">
                            <i className="im im-icon-Security-Block"></i> Menu title
                        </p>
                        <ul className="menu-list">
                            <li>
                                <a className="side-menu-item is-expandable">Menu item <i className="sl sl-icon-arrow-down end-icon"></i></a>
                                <ul className="sidebar-submenu display-none">
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="side-menu-item is-expandable">Menu item <i className="sl sl-icon-arrow-down end-icon"></i></a>
                                <ul className="sidebar-submenu display-none">
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                </ul>
                            </li>
                        </ul>
                        <p className="menu-label">
                            <i className="im im-icon-Two-Windows"></i> Menu title
                        </p>
                        <ul className="menu-list">
                            <li>
                                <a className="side-menu-item is-expandable">Menu item <i className="sl sl-icon-arrow-down end-icon"></i></a>
                                <ul className="sidebar-submenu display-none">
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="side-menu-item is-expandable">Menu item <i className="sl sl-icon-arrow-down end-icon"></i></a>
                                <ul className="sidebar-submenu display-none">
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                    <li><a href="#" className="side-menu-subitem">Subitem</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidemenuComponent;