import React from 'react';
import CoffeeHeader from './coffeeHeader';
import MenuItem from './menuItem';

let coffeeMenu = React.createClass({

  render: function () {
    return (
      <div className='coffee'>
        <CoffeeHeader />
        <MenuItem recipe={this.props.recipes.pourOver} handleClick={ this.props.handleClick }/>
        <MenuItem recipe={this.props.recipes.chemex} handleClick={ this.props.handleClick }/>
        <MenuItem recipe={this.props.recipes.aeropress} handleClick={ this.props.handleClick }/>
        <MenuItem recipe={this.props.recipes.icedCoffee} handleClick={ this.props.handleClick }/>
      </div>
    )
  }
});

module.exports = coffeeMenu;
