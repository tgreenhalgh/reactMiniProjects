import React from 'react';
import PropTypes from 'prop-types';

class CreateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      ingredients: '',
      instructions: '',
      created: false
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

    const { name, ingredients, instructions } = this.state;
    this.props.onSubmit(name, ingredients, instructions);
    this.resetForm();
    this.setState({ created: true });
    this.refs.name.focus();
  }

  resetForm() {
    this.setState({
      name: '',
      ingredients: '',
      instructions: ''
    });
  }

  render() {
    // ES6 destructuring
    const { name, ingredients, instructions, created } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        { created && <div className="alert alert-success">Your recipe was created</div>}
        <div className='form-group'>
          <label htmlFor='name'>Recipe name:</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter recipe name here'
            value={ name }
            onChange={ this.handleChangeName }
            ref='name'
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

        <input className='btn btn-default' type='submit' value='Create' />
      </form>
    );
  }
}

// setting up the PropType - tells React what to expect for onSubmit calls
CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default CreateForm;
