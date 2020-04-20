import React, {Component} from 'react';
import Toast from 'react-bootstrap/Toast'

export default class SuccessToast extends Component {

    render() {
        return (
            <Toast show={this.props.show}
                   onClose={this.props.handleShowSuccessToastClose}
                   animation={true}
                   autohide={false}
                   delay={10000}>
                <Toast.Header>
                    <strong className="mr-auto">Thank you {this.props.fullname}</strong>
                </Toast.Header>
                <Toast.Body>
                    Successfully submitted. We will get back to you shortly.
                </Toast.Body>
            </Toast>
        );
    }
}
