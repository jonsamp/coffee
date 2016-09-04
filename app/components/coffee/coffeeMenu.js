import React from 'react';
import CoffeeHeader from './coffeeHeader';
import MenuItem from './menuItem';

let coffeeMenu = React.createClass({

  reloadPage: function () {
    window.location.reload();
  },

  render: function () {
    return (
      <div className='coffee'>
        <CoffeeHeader reloadPage={this.reloadPage}/>
        <MenuItem recipe={this.props.recipes.pourOver} handleClick={ this.props.handleClick }/>
        <MenuItem recipe={this.props.recipes.chemex} handleClick={ this.props.handleClick }/>
        <MenuItem recipe={this.props.recipes.aeropress} handleClick={ this.props.handleClick }/>

      </div>
    )
  }
});

// Iced Coffee
// <MenuItem recipe={this.props.recipes.icedCoffee} handleClick={ this.props.handleClick }/>

module.exports = coffeeMenu;
