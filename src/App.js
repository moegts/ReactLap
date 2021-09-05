import React, { Component } from 'react'

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>

        <Main/>
        
        <Footer/>
      </div>
    )
  }
}

export default App
