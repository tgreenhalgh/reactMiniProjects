import React from 'react';

import RecipeDetail from './RecipeDetail.jsx';
import RecipeList from './RecipeList.jsx';
import CreateEditForm from './CreateEditForm.jsx';
import SearchBox from './SearchBox.jsx';

const  LOCAL_STORAGE_KEY = 'recipes';

class App extends React.Component {
  constructor(props) {
    super(props);

    // get data from local storage (returns a string or null)
    const localStorageRecipes = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    this.state = {
      showCreate: false,
      recipes: localStorageRecipes ? JSON.parse(localStorageRecipes) : [],
      selectedRecipe: null,
      search: ''
    };

    this.showCreateEditForm = this.showCreateEditForm.bind(this);
    this.handleSelectRecipe = this.handleSelectRecipe.bind(this);
    this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleEditRecipe = this.handleEditRecipe.bind(this);
    this.handleRecipeCreated = this.handleRecipeCreated.bind(this);
    this.handleRecipeEdited = this.handleRecipeEdited.bind(this);
  }

  showCreateEditForm() {
    this.setState({
      showCreate: true,
      selectedRecipe: null
    });
  }

  handleRecipeCreated(name, ingredients, instructions) {
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

  handleRecipeEdited(name, ingredients, instructions) {
    const { recipes, selectedRecipe } = this.state;

    // a common React pattern for updating an object in an immutable way
    // first parameter is an empty object, which assures starting blank
    // second parameter is object we want to update
    // third parameter is object containing keys and values want to update
    // (everything else is copied over as is)
    const editedRecipe = Object.assign({}, selectedRecipe, {
      name,
      ingredients,
      instructions
    });

    // swap in the new recipe into the array in an immutable way
    const newRecipes = recipes.map(recipe =>
      recipe === selectedRecipe ? editedRecipe : recipe
    );

    this.updateRecipes(newRecipes);
    this.handleSelectRecipe(editedRecipe);
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

  handleSearchChange(search) {
    this.setState({
      search
    });
  }

  updateRecipes(newRecipes) {
    this.setState({
      recipes: newRecipes
    });

    // local storage works with strings only
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipes));
  }

  handleEditRecipe() {
    this.setState({
      showCreate: true
    });
  }

  render() {
    const { recipes, selectedRecipe, showCreate, search } = this.state;

    const filteredRecipes = recipes
      .filter(recipe => recipe.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
      .sort((a, b) => a.name > b.name);

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
              onClick={ this.showCreateEditForm }
            >
              Create new recipe
            </button>
            <SearchBox onChange={ this.handleSearchChange } />
            <RecipeList
              recipes={ filteredRecipes }
              onSelectRecipe={ this.handleSelectRecipe }
            />
          </div>

          <div className="col-xs-8">
            { showCreate
              ? <CreateEditForm
                  onCreate={ this.handleRecipeCreated }
                  onEdit={ this.handleRecipeEdited }
                  recipe={ selectedRecipe }
                />
              : <RecipeDetail
                  recipe={ selectedRecipe }
                  onDelete={ this.handleDeleteRecipe }
                  onEdit={ this.handleEditRecipe }
                />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
