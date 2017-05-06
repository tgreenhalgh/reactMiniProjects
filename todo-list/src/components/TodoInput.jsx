import React from 'react';

class TodoInput extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddItem(this.refs.input.value);
    this.refs.input.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type='text' ref='input' />
        <button>Add</button>
      </form>
    )
  }
}

export default TodoInput;
