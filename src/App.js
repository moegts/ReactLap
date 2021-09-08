import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './Components/SelectedBeast';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import dataHorns from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      image_url: "",
      title: "",
      horns: 0,
      disc: "",
      filterSort: false,
      filterArray: [],
    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (image_url, title, horns, description) => {
    this.setState({
      showModal: true,
      image_url: image_url,
      title: title,
      horns: horns,
      description: description,
    })
  }
  handleSelect = (e) => {
    let horns = e.target.value
    this.setState({
      horns: horns,
      filterArray: dataHorns.filter(i => i.horns === Number(horns)),
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      filterSort: true,
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          handleOpen={this.handleOpen}
          handleSubmit={this.handleSubmit}
          handleSelect={this.handleSelect}
          filterSort={this.state.filterSort}
          filterArray={this.state.filterArray}
        />
        <Footer />
        <SelectedBeast
          handleClose={this.handleClose}
          showModal={this.state.showModal}
          image_url={this.state.image_url}
          title={this.state.title}
          horns={this.state.horns}
          description={this.state.description} />
      </div>
    )
  }
}

export default App;
