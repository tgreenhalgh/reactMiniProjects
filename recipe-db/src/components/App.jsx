import React from 'react';

import RecipeDetail from './RecipeDetail.jsx';
import RecipeList from './RecipeList.jsx';
import CreateForm from './CreateForm.jsx';

const  LOCAL_STORAGE_KEY = 'recipes';

class App extends React.Component {
  constructor(props) {
    super(props);

    // get data from local storage (returns a string or null)
    const localStorageRecipes = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    this.state = {
      showCreate: false,
      recipes: localStorageRecipes ? JSON.parse(localStorageRecipes) : [],
      selectedRecipe: null
    };

    this.showCreateForm = this.showCreateForm.bind(this);
    this.handleCreateRecipe = this.handleCreateRecipe.bind(this);
    this.handleSelectRecipe = this.handleSelectRecipe.bind(this);
    this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
  }

  showCreateForm() {
    this.setState({
      showCreate: true
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

    this.updateRecipes(newRecipes);
  }

  handleSelectRecipe(recipe) {
    this.setState({
      selectedRecipe: recipe,
      showCreate: false
    });
  }

  handleDeleteRecipe(recipeToDelete) {
    const newRecipes = this.state.recipes.filter(recipe => recipe !== recipeToDelete);
    this.updateRecipes(newRecipes);

    // deleted recipe is still selected, so un-select
    this.setState({
      selectedRecipe: null
    });
  }

  updateRecipes(newRecipes) {
    this.setState({
      recipes: newRecipes
    });

    // local storage works with strings only
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipes));
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
            <RecipeList
              recipes={ this.state.recipes }
              onSelectRecipe={ this.handleSelectRecipe }
            />
          </div>

          <div className="col-xs-8">
            { this.state.showCreate
              ? <CreateForm onSubmit={ this.handleCreateRecipe }/>
              : <RecipeDetail recipe={ this.state.selectedRecipe } onDelete={ this.handleDeleteRecipe }/> }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
