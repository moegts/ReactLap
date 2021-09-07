import React, { Component } from 'react'

import {
    Modal,
    Button
} from "react-bootstrap";

class SelectedBeast extends Component {
    render() {
        return (
                <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.title}
                        <br />
                        <img src={this.props.image_url} alt='imgReact'/>
                        <br />
                        <p>{this.props.description}</p>
                        <br />
                        <h4>Number of horns: {this.props.horns}</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        )
    }
}

export default SelectedBeast
