import React from 'react';
import WeatherContainer from '../containers/weatherContainer';
import CoffeeMenu from '../components/coffee/coffeeMenu';
import CoffeeContainer from '../containers/coffeeContainer';
import recipes from '../data/recipes';
import '../stylesheets/app.scss';

let App = React.createClass({

  recipes: recipes,

  getInitialState: function () {
    return {
      splitView: false,
      recipe: {
        "recipeId": "pourOver",
        "method": "Pour Over",
        "bloom": {
          "time": 3,
          "grams": 0.1176
        },
        "pour": {
          "time": 165,
          "grams": 0.8824
        },
        "grind": 22,
        "intensity": 17,
        "min": 10,
        "max": 25
      }
    }
  },

  handleClick: function (recipe) {

    if (recipe) {
      this.getRecipe(recipe)
    }

    let toggleSplitView = this.state.splitView ? false : true;
    this.setState({
      splitView: toggleSplitView
    })
  },

  getRecipe: function (recipe) {
    this.setState({
      recipe: recipe
    });
  },

  render: function () {
    return (
      <div>
        {(() => {
          if (this.state.splitView) {
            return (
              <div className='split-view'>
                <WeatherContainer />
                <CoffeeMenu handleClick={this.handleClick} recipes={this.recipes} />
              </div>
            )
          } else {
            return (
              <CoffeeContainer recipe={this.state.recipe} handleClick={this.handleClick}/>
            )
          }
        })()}
      </div>
    );
  }
});

module.exports = App;
