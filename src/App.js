import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './Components/SelectedBeast';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        showModal:false,
        image_url:"",
        title:"",
        horns:0,
        disc:"",
    }
}
  handleClose=()=>{
    this.setState({
      showModal:false
    })
  }
  handleOpen=(image_url, title, horns, description)=>{
    this.setState({
      showModal:true,
      image_url:image_url,
      title:title,
      horns:horns,
      description:description,
    })
  }
  render() {
    return (
      <div>
        <Header/>
        <Main handleOpen={this.handleOpen}/>
        <Footer/>
        <SelectedBeast 
        handleClose={this.handleClose} 
        showModal={this.state.showModal}
        image_url={this.state.image_url}
        title={this.state.title}
        horns={this.state.horns}
        description={this.state.description}/>
      </div>
    )
  }
}

export default App;
