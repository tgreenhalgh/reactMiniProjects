import React from 'react';
import PropTypes from 'prop-types';

class CreateEditForm extends React.Component {
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

  componentDidMount() {
    this.setStateFromRecipe(this.props.recipe);
  }

  // useful because can compare current props this.props with the updated props, nextProps
  componentWillReceiveProps(nextProps) {
    this.setStateFromRecipe(nextProps.recipe);
  }

  setStateFromRecipe(recipe) {
    this.setState({
      name: recipe ? recipe.name : '',
      ingredients: recipe ? recipe.ingredients : '',
      instructions: recipe ? recipe.instructions : ''
    });
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

    if (this.props.recipe) {
      this.props.onEdit(name, ingredients, instructions);
    } else {
      this.props.onSubmit(name, ingredients, instructions);

      this.resetForm();
      this.setState({ created: true });
      this.refs.name.focus();
    }
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
    const { recipe } = this.props;

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

        <input
          className='btn btn-default'
          type='submit'
          value={ this.props.recipe ? 'Edit' : 'Create' }
        />
      </form>
    );
  }
}

// setting up the PropType - tells React what to expect for onSubmit calls
CreateEditForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  // note: null counts are doesn't exists, so isRequired fails when recipe is null
  recipe: PropTypes.object
}

export default CreateEditForm;
