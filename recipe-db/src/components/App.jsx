import React from 'react';

import RecipeDetail from './RecipeDetail.jsx';
import RecipeList from './RecipeList.jsx';
import CreateForm from './CreateForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCreate: true
    };

    this.showCreateForm = this.showCreateForm.bind(this);
  }

  showCreateForm() {
    this.setState({
      showCreate: false
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
            <RecipeList />
          </div>

          <div className="col-xs-8">
            { this.state.showCreate ? <CreateForm /> : <RecipeDetail /> }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
