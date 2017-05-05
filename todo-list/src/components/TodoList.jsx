import React from 'react';

import TodoItem from './TodoItem.jsx';

class TodoList extends React.Component {
  render() {
    const items = [
      { name: 'First item', key: 1, done: false},
      { name: 'Second item', key: 2, done: true},
      { name: 'Third item', key: 3, done: false},
    ];

    return (
      <ul>
        { items.map( (item, key) => <TodoItem name={ item.name } key={ item.key } done={ item.done }/>) }
      </ul>
    );
  }
}

export default TodoList;
