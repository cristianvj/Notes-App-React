import React, {Component} from 'react';
import './App.css';

import {todos} from './todos.json'
import TodoForm from './components/TodoForm'
console.log(todos)

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }
  handleAddTodo(todo){
     this.setState({
       todos: [...this.state.todos, todo]
     })
  }
  render(){
    const todos = this.state.todos.map((todo, i)=>{
      return(
        <div className="col-md-4">
          <div className="card mt-3">
            <div className="card-header">
              <h3 className="text-dark">{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p className="text-secondary">{todo.description}</p>
              <p className="text-center"><mark>{todo.responsable}</mark></p>
            </div>
          </div>
        </div>
      )
    })
    
    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
                <a href="/" className="text-white">
                  Tasks
                  <span className="badge badge-pill badge-light ml-2">
                    { this.state.todos.length }
                  </span>
                </a>
            </nav>
            <div className="container">
            <TodoForm onAddTodo={this.handleAddTodo }/>
              <div className="row mt-4">
                {todos}
              </div>
            </div>
      </div>
    );
  }
}

export default App;
