import React, {Component} from 'react';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import {todos} from './todos.json'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill bg-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation title="Tasks " tasks={this.state.todos.length} />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <TodoForm />
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
