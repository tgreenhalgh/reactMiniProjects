import * as React from 'react';
import PropTypes from 'prop-types';

// stateless components receive their props as the first argument
// const RecipeList = (props) => (
// { props.recipes.map( recipe => <li key={ recipe.id }>{ recipe.name }</li>) }
const RecipeList = ({ recipes }) => (  // ES6 destructuring
  <ul className="list-unstyled">
    { recipes.map( recipe => <li key={ recipe.id }>{ recipe.name }</li>) }
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList;
