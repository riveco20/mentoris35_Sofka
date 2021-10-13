import React, { Component } from 'react'
import From from '../components/From'
import ListNumberRandom from '../components/ListNumberRandom'
import Result from '../components/Result'

class App extends Component {// component stateful
  render() {
    return (
      <div>
        <h3>Lista Random</h3>
        <p>Sistema Ramdom - Demo</p>
        <From />
        <h3>Lista numeros random</h3>
        <ListNumberRandom/>
        <h2>Resultados</h2>
        <Result />
      </div>
    )
  }
}

export default App


