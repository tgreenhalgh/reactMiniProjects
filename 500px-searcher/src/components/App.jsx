import React from 'react';

import Header from './Header.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  render() {
    return (
    <div className='container'>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <Search />
      </div>
    </div>
    );
  }
}

export default App;
