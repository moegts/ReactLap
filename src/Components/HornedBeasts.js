import React, { Component } from 'react'

class HornedBeasts extends Component {
    constructor(props){
        super(props);
        this.state={
            LikesCounter:0,
        }
    }
    plus1Like=()=>{
        this.setState({
            LikesCounter:this.state.LikesCounter+1
        })
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img onClick={this.plus1Like} src={this.props.image_url} alt='imgReact' title={this.props.title}/>
                <h3>👍🏼{this.state.LikesCounter}🧡</h3>
                <p>{this.props.description}</p>
                <h4>{this.props.keyword}</h4>
                <h4>{this.props.horns}</h4>
            </div>
        )
    }
}

export default HornedBeasts
