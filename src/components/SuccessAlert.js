import React, {Component} from 'react';
import Alert from "react-bootstrap/Alert";

export default class SuccessAlert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    toggleShow = () => {
        this.setState({show: false})
    };

    render() {
        return (
            <Alert variant="success" show={this.state.show}>
                <strong>Thank you!</strong> You have successfully subscribed for new updates. &nbsp; &nbsp; &nbsp;
                <button onClick={this.toggleShow} onKeyDown={this.toggleShow}
                        style={{background: "transparent", border: "none"}}>
                    <i className="fab fa fa-times" aria-hidden="true"/>
                </button>
            </Alert>
        );
    }
}
