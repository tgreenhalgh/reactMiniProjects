import React from 'react';

import SearchForm from './SearchForm.jsx';

class Search extends React.Component {
  // using ES 2015 Class Property Syntax
  // search(query) {
  search = (query) => {
    // using ES6 Template String ``
    const apiUrl = `https://api.500px.com/v1/photos/search?consumer_key=${config.key}&image_size[]=3&image_size[]=4&term=${query}`;

    // fetch returns a promise
    fetch(apiUrl)
      // get the response, convert to json
      .then(response => response.json())
      // take the json, do whatever
      .then(json => {
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
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
