import React from 'react';

import TodoItem from './TodoItem.jsx';
import TodoInput from './TodoInput.jsx';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      key: 0
    };

    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(name) {
    const newItems = this.state.items.concat({ name: name, key: this.state.key, done: false });
    this.state.key++;
    this.setState({ items: newItems });
  }

  handleToggleDone(item) {
    const newItems = this.state.items.slice();
    newItems[newItems.indexOf(item)].done = !item.done;

    this.setState({ items: newItems });
  }

  render() {
    return (
      <div>
        <ul>
          { this.state.items.map( (item, key) =>
            <TodoItem name={ item.name } key={ item.key } done={ item.done } onToggleDone={ this.handleToggleDone.bind(this, item) }/>)
          }
        </ul>
        <TodoInput onAddItem={ this.handleAddItem }/>
      </div>
    );
  }
}

export default TodoList;
