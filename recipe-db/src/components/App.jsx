import React from 'react';

import RecipeDetail from './RecipeDetail.jsx';
import RecipeList from './RecipeList.jsx';
import CreateForm from './CreateForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCreate: true,
      recipes: []
    };

    this.showCreateForm = this.showCreateForm.bind(this);
    this.handleCreateRecipe = this.handleCreateRecipe.bind(this);
  }

  showCreateForm() {
    this.setState({
      showCreate: false
    });
  }

  handleCreateRecipe(name, ingredients, instructions) {
    // DON'T mutate the state array directly! Make a copy
    const newRecipes = this.state.recipes.concat({
      id: new Date().getTime(), // time in miliseconds (a unique key)
      // name: name <-- ES6, if both same, just need one
      name,
      ingredients,
      instructions
    });

    this.setState({
      recipes: newRecipes
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Recipe Database</h1>

        <div className="row">
          <div className="col-xs-4">
            <button
              type='button'
              className='btn btn-primary'
              style={{
                width: '100%',
                marginBottom: '5px'
              }}
              onClick={ this.showCreateForm }
            >
              Create new recipe
            </button>
            <RecipeList recipes={ this.state.recipes }/>
          </div>

          <div className="col-xs-8">
            { this.state.showCreate
              ? <CreateForm onSubmit={ this.handleCreateRecipe }/>
              : <RecipeDetail /> }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
