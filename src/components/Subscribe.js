import React, {Component} from 'react';
import SuccessAlert from "./SuccessAlert";

export default class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSuccessMsg: false
        }
    }

    handleSubmit = (e) => {
        this.setState({showSuccessMsg: true});
        e.preventDefault();
    };

    render() {
        return (
            <section id="contact" className="signup-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 mx-auto text-center">
                            <i className="far fa-paper-plane fa-2x mb-2 text-white"/>
                            <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

                            <form name="subscribe"
                                  method="POST"
                                  // onSubmit={this.handleSubmit}
                                  action=""
                                  data-netlify="true"
                                  data-netlify-honeypot="bot-field"
                                  className="form-inline d-flex">
                                <input type="hidden" name="form-name" value="subscribe"/>
                                <input type="hidden" name="bot-field"/>

                                <input
                                    type="email"
                                    id="inputEmail"
                                    name="subscriber-email"
                                    placeholder="Enter email address..."
                                    className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                                    required
                                />
                                <button type="submit" className="btn btn-primary mx-auto">
                                    Subscribe
                                </button>
                            </form>

                            <div>
                                <br/>
                                {this.state.showSuccessMsg ? <SuccessAlert/> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
