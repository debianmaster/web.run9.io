import React, { Component } from 'react';

class EnquieryComponent extends Component{

    render(){
        return(
            <section className="section section-light-grey is-medium">
                <div className="container">
                    <div className="title-wrapper huge-pb">
                        <h2 className="title section-title has-text-centered pb-20">Drop us a line or two!</h2>
                    </div>
                    <div className="columns mt-80">
                        <div className="column is-6 is-offset-3">
                            <form>
                                <div className="columns is-multiline">
                                    <div className="column is-6">
                                        <input className="input is-medium" type="text" placeholder="Enter your Name"/>
                                    </div>
                                    <div className="column is-6">
                                        <input className="input is-medium" type="email" placeholder="Enter your Email"/>
                                    </div>
                                    <div className="column is-12">
                                        <textarea className="textarea" rows="10" placeholder="Write someting ..."></textarea>
                                    </div>
                                    <div className="form-footer has-text-centered mt-10">
                                        <button className="button cta is-large primary-btn raised is-clear">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default EnquieryComponent;