import React, { useState } from 'react';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import './App.css';

function App() {
  // useState hook to manage the foodItems state
  const [foodItems, setFoodItems] = useState([
    'sabzi',
    'chicken',
    'roti',
    'apple',
    'pizza',
  ]);

  // const onKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     let newFoodItem = event.target.value.trim();
  //     if (newFoodItem) {
  //       console.log(`Food value you entered: ${newFoodItem}`);
  //       // Correctly updating the state
  //       setFoodItems([...foodItems, newFoodItem]);
  //       event.target.value = ''; // Clear the input field
  //     }
  //   }
  // };

  const onKeyDown = (event) =>{
    if(event.key == 'Enter'){
      let newFoodItem = event.target.value.trim();
      if(newFoodItem){
        setFoodItems([...foodItems,newFoodItem]);
        event.target.value = '';
      }
        }
  }

  return (
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodInput handleKeyDown={onKeyDown} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
