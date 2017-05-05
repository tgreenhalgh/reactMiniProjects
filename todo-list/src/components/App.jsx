import React from 'react';

import Header from './Header.jsx';
import TodoList from './Todolist.jsx';

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <TodoList />
    </div>;
  }
}

export default App;
