import React from 'react';

import SearchForm from './SearchForm.jsx';

class Search extends React.Component {
  // using ES 2015 Class Property Syntax
  // search(query) {
  search = (query) => {
    console.log(query);
  }

  render() {
    return (
      <div>
        <SearchForm onSearch={ this.search  }/>
      </div>
    );
  }
}

export default Search;
