import React, {Component} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const initialState = {
    submitting: false,
    fullname: null,
    email: null,
    phone: null,
    message: null,
    fullnameDefault: "Bruce Wayne",
    emailDefault: "wayne@dc-comics.com",
    phoneDefault: "9988776655",
    messageDefault: "I am batman."
};

export default class SupportForm extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.enableSubmitBtn = this.enableSubmitBtn.bind(this);
    }

    handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({[name]: value});
        e.preventDefault();
    };

    handleReset = e => {
        this.setState(initialState);
        e.target.reset();
    };

    handleSubmit = e => {
        alert(`Successfully submitted. Thank you ${this.state.fullname}. We will get back to you shortly. You will be redirected to home page.`);
        window.location.href = "/";
        e.preventDefault();
    };

    enableSubmitBtn = () => {
        if (this.state.fullname != null && this.state.email != null
            && this.state.phone != null && this.state.message != null) {
            this.setState({submitting: true});
        }
    };

    render() {
        return (
            <section id="support-form">
                <div className="container">
                    <form name="help-support"
                          method="POST"
                        // action="https://getform.io/f/d308340c-8ce4-41de-955f-0f41b10a395e"
                          onSubmit={this.handleSubmit}
                          onReset={this.handleReset}
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          className="text-white">
                        <input type="hidden" name="form-name" value="help-support"/>
                        <input type="hidden" name="bot-field"/>

                        <noscript>
                            <p>This page won’t work with Javascript disabled</p>
                        </noscript>

                        <div className="form-group row">
                            <label className="control-label col-sm-2" htmlFor="name">Full Name:</label>
                            <span className="col-sm-10">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-user"/>
                                        </span>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           id="fullname"
                                           name="fullname"
                                        // value={this.state.fullname}
                                           onChange={this.handleInputChange}
                                           placeholder={this.state.fullnameDefault}
                                           required/>
                                </div>
                            </span>
                        </div>

                        <div className="form-group row">
                            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                            <span className="col-sm-10">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-envelope"/>
                                        </span>
                                    </div>
                                    <input type="email"
                                           className="form-control"
                                           id="email"
                                           name="email"
                                        // value={this.state.email}
                                           onChange={this.handleInputChange}
                                           placeholder={this.state.emailDefault}
                                           required/>
                                </div>
                            </span>
                        </div>

                        <div className="form-group row">
                            <label className="control-label col-sm-2" htmlFor="phone">Phone:</label>
                            <span className="col-sm-10">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-phone"/>
                                        </span>
                                    </div>
                                    <input type="tel"
                                           maxLength="10"
                                           className="form-control"
                                           id="phone"
                                           name="phone"
                                        // value={this.state.phone}
                                           onChange={this.handleInputChange}
                                           placeholder={this.state.phoneDefault}
                                           required/>
                                </div>
                            </span>
                        </div>

                        <div className="form-group row">
                            <label className="control-label col-sm-2" htmlFor="email">Message:</label>
                            <span className="col-sm-10">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-pencil-alt"/>
                                        </span>
                                    </div>
                                    <textarea rows="5"
                                              className="form-control"
                                              id="message"
                                              name="message"
                                        // value={this.state.message}
                                              onChange={this.handleInputChange}
                                              placeholder={this.state.messageDefault}
                                              required/>
                                </div>
                            </span>
                        </div>


                        {/*<br/>*/}
                        {/*<div className="checkbox">*/}
                        {/*    <input type="checkbox"/>*/}
                        {/*    <label>&nbsp; Remember me</label>*/}
                        {/*</div>*/}

                        {/*DO NOT MODIFY THIS KEY. PLEASE CONTACT ADMIN BEFORE CHANGING*/}
                        <ReCAPTCHA sitekey="6LcaTuAUAAAAAEZRuZBlfWmf4L7tl8CP9OGrK1aZ" onChange={this.enableSubmitBtn}/>
                        <br/>

                        <button type="submit" className="btn btn-sm btn-primary" disabled={!this.state.submitting}>
                            Submit
                        </button>
                        &nbsp; &nbsp;
                        <input type="reset" className="btn btn-sm btn-primary" value="Clear"/>
                    </form>
                </div>
            </section>
        );
    }
}
