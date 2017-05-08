import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };

    // using ES 2015 Class Property Syntax
    // npm i -D babel-plugin-transform-class-properties
    // and add "transform-class-properties" to Babel plugins
    // means don't have to use .bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // using ES 2015 Class Property Syntax
  // means don't have to use .bind(this)
  // handleSubmit(e) {
  handleSubmit = (e) => {  // auto-binds 'this'
    e.preventDefault();
    this.props.onSearch(this.state.query);
  }

  render() {
    return (
      // note: this.handleSubmit.bind(this) not needed because using Class Property Syntax
      <form className='form-inline' onSubmit={ this.handleSubmit }>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Enter your search'
            style={{ marginRight: '5px' }}
            onChange={ (e) => {
              this.setState({ query: e.target.value });
            }}
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

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
