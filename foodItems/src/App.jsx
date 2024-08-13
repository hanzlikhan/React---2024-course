import React from 'react';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import "./App.css";
function App() {
  let foodItems = ['sabzi', 'chicken', 'roti', 'apple', 'pizza'];
  return (
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
