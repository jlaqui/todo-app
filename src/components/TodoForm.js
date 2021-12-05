import React, {Component} from "react"

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
  }

  render() {
    return (
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="text"
              name="responsible"
              className="form-control"
              placeholder="Responsible"
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-group mt-2">
            <select
              name="priority"
              className="form-control"
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Save
          </button>
        </form >
      </div >
    );
  }
}
export default TodoForm;
