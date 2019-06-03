import React, {Component} from 'react';
import './App.css';

import Navigation from './components/Navigation';

import {todos} from './todos.json'
console.log(todos)

class App extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  render(){
    return (
      <div className="App">
          <Navigation titulo="Mi primera navegación"/>
      </div>
    );
  }
}

export default App;
