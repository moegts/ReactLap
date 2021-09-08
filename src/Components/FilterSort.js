import React, { Component } from 'react'

import {
    Form,
    Row,
    Col,
    Button
} from "react-bootstrap";

class FilterSort extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <Row className="align-items-center">
                        <Col xs="auto" className="my-1">
                            <Form.Label
                                className="me-sm-2"
                                htmlFor="inlineFormCustomSelect"
                                visuallyHidden
                            >
                                Preference
                            </Form.Label>
                            <Form.Select 
                                onChange={(eventItem=>{this.props.handleSelect(eventItem)})}
                                className="me-sm-2" id="inlineFormCustomSelect">
                                <option>Choose Number of Horn...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="100">100</option>
                            </Form.Select>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="submit">Sort</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default FilterSort
