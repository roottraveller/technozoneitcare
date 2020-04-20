import React, {Component} from 'react';
import Toast from 'react-bootstrap/Toast'

export default class SuccessToast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    toggleShow = (e) => {
        this.setState({show: false});
        e.preventDefault();
    };

    render() {
        return (
            <Toast onClose={this.toggleShow} show={this.state.show} animation={true} autohide={false} delay={10000}>
                <Toast.Header>
                    <strong className="mr-auto">Thank you</strong>
                </Toast.Header>
                <Toast.Body>You have successfully subscribed for new updates.</Toast.Body>
            </Toast>
        );
    }
}


