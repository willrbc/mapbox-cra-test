import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Map from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map coordinates={[0, 0]} />
      </div>
    )
  }
}

export default App
