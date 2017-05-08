import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <form className='form-inline'>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Enter your search'
            style={{ marginRight: '5px'}}
          />
        </div>

        <button
          className='btn btn-default'
          type='submit'
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
