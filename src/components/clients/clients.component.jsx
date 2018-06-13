import React, { Component } from 'react';
import icFaceOne from '../../img/illustrations/faces/1.png';
import icFaceTwo from '../../img/illustrations/faces/2.png';
import icFaceThree from '../../img/illustrations/faces/3.png';

class ClientsComponent extends Component{

    render(){

        return(
            <section className="section is-medium section-secondary">
                <div className="container">
                    <div className="title-wrapper pb-40">
                        <h2 className="title is-2 section-title has-text-centered light-text pb-20">Our Clients love us!</h2>
                        <h3 className="subtitle is-5 has-text-centered light-text">Lorem ipsum sit dolor amet is a dummy text used by typography industry</h3>
                    </div>
                    <div className="columns is-vcentered mt-40">
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
                                </blockquote>
                                <div className="author">
                                    <img src={icFaceOne} alt="" />
                                    <h5>Irma Walters</h5>
                                    <span>Accountant</span>
                                </div>
                            </figure>
                        </div>
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
                                </blockquote>
                                <div className="author">
                                    <img src={icFaceTwo} alt="" />
                                    <h5>John Bradley</h5>
                                    <span>Financial Analyst</span>
                                </div>
                            </figure>
                        </div>
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
                                </blockquote>
                                <div className="author">
                                    <img src={icFaceThree} alt="" />
                                    <h5>Gary Blackman</h5>
                                    <span>HR Manager</span>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ClientsComponent;