import React from 'react';
import PropTypes from 'prop-types';

class CreateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      ingredients: '',
      instructions: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.handleChangeInstructions = this.handleChangeInstructions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    // target property is the node itself
    this.setState({ name: event.target.value });
  }

  handleChangeIngredients(event) {
    // target property is the node itself
    this.setState({ ingredients: event.target.value });
  }

  handleChangeInstructions(event) {
    // target property is the node itself
    this.setState({ instructions: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // setting up the PropType - tells React what to expect for onSubmit calls
    const { name, ingredients, instructions } = this.state;
    this.props.onSubmit(name, ingredients, instructions);
  }

  render() {
    // ES6 destructuring
    const { name, ingredients, instructions } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <div className='form-group'>
          <label htmlFor='name'>Recipe name:</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter recipe name here'
            value={ name }
            onChange={ this.handleChangeName }
          />
        </div>

        <div className='form-group'>
          <label htmlFor='ingredients'>Ingredients:</label>
          <textarea
            className='form-control'
            rows='5'
            id='ingredients'
            placeholder='Enter ingredients here, one per line'
            value={ ingredients }
            onChange={ this.handleChangeIngredients }
          />
        </div>

        <div className='form-group'>
          <label htmlFor='instructions'>Instructions:</label>
          <textarea
            className='form-control'
            rows='10'
            id='instructions'
            placeholder='Enter instructions here, one step per line'
            value={ instructions }
            onChange={ this.handleChangeInstructions }
          />
        </div>

      </form>
    );
  }
}

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default CreateForm;
