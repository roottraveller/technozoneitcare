import React, {Component} from 'react';
import SuccessAlert from "./SuccessAlert";

const initialState = {
    showSuccessMsg: false,
    email: '',
    emailPlaceholder: "Enter email address...",
};

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleShowSuccessMsgClose = this.handleShowSuccessMsgClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleShowSuccessMsgClose = () => {
        this.setState(initialState)
    };

    handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({...this.state, [name]: value});
        e.preventDefault();
    };

    handleSubmit = e => {
        e.preventDefault();
        const subscribeform = e.target;
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({
                'form-name': subscribeform.getAttribute('name'),
                ...this.state,
            }),
        }).catch((error) => alert(error));

        this.setState({showSuccessMsg: true});
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
                                  onSubmit={this.handleSubmit}
                                  action=""
                                  data-netlify="true"
                                  data-netlify-honeypot="bot-field"
                                  className="form-inline d-flex">
                                <input type="hidden" name="form-name" value="subscribe"/>
                                <input type="hidden" name="bot-field"/>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    placeholder={this.state.emailPlaceholder}
                                    onChange={this.handleInputChange}
                                    className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                                    required/>
                                <button type="submit" className="btn btn-primary mx-auto">
                                    Subscribe
                                </button>
                            </form>

                            <div>
                                <br/>
                                {this.state.showSuccessMsg ?
                                    <SuccessAlert show={true}
                                                  handleShowSuccessMsgClose={this.handleShowSuccessMsgClose}/> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
