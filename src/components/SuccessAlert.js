import React, {Component} from 'react';
import Alert from "react-bootstrap/Alert";

export default class SuccessAlert extends Component {
    render() {
        return (
            <Alert variant="success"
                   show={this.props.show}
                   onClose={this.props.handleShowSuccessMsgClose}
                   dismissible>
                <strong>Thank you!</strong>
                You have successfully subscribed for new updates. &nbsp; &nbsp; &nbsp;
            </Alert>
        );
    }
}
