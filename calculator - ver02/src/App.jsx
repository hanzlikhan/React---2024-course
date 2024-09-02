import React, { useState } from 'react';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import styles from './App.module.css';
import './App.css';

function App() {
  const [calVal, setCalValue] = useState('');

  const onButtonClick = (buttonText) => {
    if(buttonText == "C"){
      setCalValue("");
    }else if(buttonText == "="){
        const result = eval(calVal)
        setCalValue(result)
    // }else{
    //   const newDisplayValue = calVal + buttonText
    //   setCalValue(newDisplayValue)
    // }
    // const value = event.target.textContent; // Get the text of the clicked button
    console.log(buttonText); // Log the value to the console
    // Update the calculator display or perform further actions with the value here
  };

  return (
    <div className={styles.calculator}>
      <Display DisplayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
