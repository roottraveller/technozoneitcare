import React, {Component} from 'react';
import Toast from 'react-bootstrap/Toast'

export default class SuccessToast extends Component {

    render() {
        return (
            <div>
                <Toast className="m-auto p-0"
                       show={this.props.show}
                       onClose={this.props.handleShowSuccessToastClose}
                       animation={true}
                       autohide={false}
                       delay={10000}>
                    <Toast.Header>
                        <strong className="mr-auto" style={{color: "#5cb85c"}}>
                            <i className="fa fa-check-circle" aria-hidden="true"/>
                            &nbsp;Thank you {this.props.fullname}
                        </strong>
                        <small className="text-muted">just now</small>
                    </Toast.Header>
                    <Toast.Body>
                        Successfully submitted. We will get back to you shortly. Go to <a href="/">Home</a>
                    </Toast.Body>
                </Toast>
                <br/>
            </div>
        );
    }
}
