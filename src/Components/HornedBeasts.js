import React, { Component } from 'react'

import {
    Card,
    Button,
    Col,
} from 'react-bootstrap';

class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: 'asc',
            LikesCounter: 0,
        }
    }
    plus1Like = () => {
        this.setState({
            LikesCounter: this.state.LikesCounter + 1
        })
    }
    gitHandleOpen = () => {

        let image_url = this.props.image_url;
        let title = this.props.title;
        let horns = this.props.horns;
        let description = this.props.description;
        this.props.handleOpen(image_url, title, horns, description);

    }
    render() {
        return (
            <div>
                {/* <h2>{this.props.title}</h2>
                <img onClick={this.plus1Like} src={this.props.image_url} alt='imgReact' title={this.props.title} />
                <h3>👍🏼{this.state.LikesCounter}🧡</h3> */}
                {/* <p>{this.props.description}</p>
                <h4>{this.props.keyword}</h4>
                <h4>{this.props.horns}</h4> */}
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image_url} onClick={this.plus1Like} alt='imgReact' title={this.props.title} />
                        <Card.Body>
                            <Card.Title>{this.props.keyword}</Card.Title>
                            <Card.Text>
                                {this.props.title}
                                <br />
                                <h3>👍🏼{this.state.LikesCounter}🧡</h3>
                            </Card.Text>
                            <Button
                                onClick={this.gitHandleOpen}
                                variant="primary"
                            >
                                See More
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default HornedBeasts