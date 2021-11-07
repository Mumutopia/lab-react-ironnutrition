import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

import './App.css';
import AddNewFood from './components/AddNewFood';
import Search from './components/Search';

export class App extends Component {
  state = {
    foodslist: foods,
    isFormHere: false,
    searchArray: [],
    todaysArray: [],
  };

  addFood = (food) => {
    const clone = [...this.state.foodslist];
    clone.push(food);
    this.setState({
      foodslist: clone,
      isFormHere: false,
    });
  };

  changeForm = () => {
    this.setState({
      isFormHere: true,
    });
  };

searchFood = (food) => {
  
  
  const clone = [...this.state.foodslist]
  this.setState({
    searchArray: clone.filter((bouffe) => { return bouffe.name.includes(food.name)} )
  },)

}

todaysFood = (food) => {
console.log(food);
const clone = [...this.state.foodslist]
this.setState({
  todaysArray: clone.filter((bouffe) => {return bouffe.name === food.name })
  // .map((bouffe)=> {return  bouffe.quantity = food.quantity})
},() => {console.log(this.state.todaysArray)})

}


  render() {
    //if search array.length ?
    // let filteredSearch = [];
    //  {
    //   filteredSearch = this.state.searchArray
    // } else {
    //   filteredSearch = this.state.foodslist
    // }
     
    
    return (
      <>
        <h2>Add a New Food :</h2>
        <button onClick={this.changeForm}>+</button>
        <AddNewFood form={this.state.isFormHere} handler={this.addFood} />
        <Search handler={this.searchFood}/>
        <ul className="listing">
          {this.state.searchArray.map((f, i) => {
            
            return (
              <li className="food" key={i}>
                <FoodBox food={f} handler={this.todaysFood} />
              </li>
            );
          })}
        </ul>
        <div>
          <h2>Today's foods :</h2>
          <ul>

            <li>Total: cals</li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;
