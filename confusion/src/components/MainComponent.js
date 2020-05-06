import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class Main extends Component {
   constructor(props){
      super(props);

      this.state = {
         dishes : DISHES,
         selectedDish : null
      };
   }
   onDishSelected(dish){
      this.setState({selectedDish: dish});
   }

   render(){
      return (
        <div>
          <Navbar dark color = "primary">
             <div className = "container">
                <NavbarBrand href = "/">Let's do it</NavbarBrand>
             </div>
          </Navbar>
          <Menu dishes = {this.state.dishes}  onClick = {() => this.onDishSelected(dish)}/>
        </div>
      );
   }

}

export default App;
