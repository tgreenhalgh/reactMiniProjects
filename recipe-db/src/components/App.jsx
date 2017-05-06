import React from 'react';

import RecipeDetail from './RecipeDetail.jsx';
import RecipeList from './RecipeList.jsx';

class App extends React.Component {
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
            >
              Create new recipe
            </button>
            <RecipeList />
          </div>

          <div className="col-xs-8">
            <RecipeDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
