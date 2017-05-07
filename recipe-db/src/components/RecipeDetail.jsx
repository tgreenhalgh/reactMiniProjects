import * as React from 'react';
import PropTypes from 'prop-types';

// destructure 'recipe' prop & onDelete
const RecipeDetail = ( { recipe, onDelete }) => {
  const confirmDelete = () => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      onDelete(recipe);
    }
  };

  return (
    <div>
      {
        recipe ?
          <div>
            <h2>{  recipe.name }</h2>

            <h3>Ingredients:</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{ recipe.ingredients }</p>

            <h3>Instructions:</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{ recipe.instructions }</p>

            <button
              type='button'
              className='btn btn-danger'
              onClick={ confirmDelete }
            >Delete Recipe</button>
          </div>
        :
          <div>Choose a recipe from the left hand side, or create a new one</div>
      }
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  onDelete: PropTypes.func.isRequired
};

export default RecipeDetail;
