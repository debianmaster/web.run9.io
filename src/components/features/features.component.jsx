import React, { Component } from 'react';
import icLappyGlobe from '../../img/illustrations/icons/laptop-globe.svg';
import icMobileFeed from '../../img/illustrations/icons/mobile-feed.svg';
import icDocSync from '../../img/illustrations/icons/doc-sync.svg';

class FeaturesComponent extends Component{

    render(){
        return(
            <section className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="title section-title">You&#39;re here because you want the best</h1>
                        </div>
                        <div className="column is-7 mt-60">
                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src={icLappyGlobe} alt="lappy globe"/>
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Powerful and unified interface</span>
                                            <br/>
                                            <br/>
                                            <span className="icon-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src={icDocSync} alt="doc sync"/>
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Cross device Synchronisation</span>
                                            <br/>
                                            <br/>
                                            <span className="icon-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src={icMobileFeed} alt="mobile feed"/>
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Nomad System</span>
                                            <br/>
                                            <br/>
                                            <span className="icon-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesComponent;