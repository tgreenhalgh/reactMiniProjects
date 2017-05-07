import * as React from 'react';
import PropTypes from 'prop-types';

// stateless components receive their props as the first argument
// const RecipeList = (props) => (
// { props.recipes.map( recipe => <li key={ recipe.id }>{ recipe.name }</li>) }
const RecipeList = ({ recipes, onSelectRecipe }) => (  // ES6 destructuring
  <ul className="list-unstyled">
    { recipes.map( recipe => <li key={ recipe.id }>
      <a href='#' onClick={ onSelectRecipe.bind(null, recipe) }>{ recipe.name }</a></li>) }
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onSelectRecipe: PropTypes.func.isRequired
};

export default RecipeList;
