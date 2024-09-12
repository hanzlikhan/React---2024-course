import "./App.css";
import { useRef } from "react";

function App() {
  // A reference to store the input value
  const inputValue = useRef("");

  // A reference to store how many times the input has changed (render count)
  const count = useRef(0);

  // Function to handle input changes
  const handleChange = () => {
    // Update the input value reference with the current value of the input element
    inputValue.current = inputRef.current.value;

    // Increment the count reference to track the number of input changes
    count.current += 1;
  };

  // Reference for the actual input DOM element
  const inputRef = useRef(null);

  return (
    <center className="App">
      {/* Input field where the user types. The ref is connected to inputRef */}
      <input ref={inputRef} type="text" onChange={handleChange} />

      {/* Displaying the number of times the input has changed */}
      <h1>Render count is: {count.current}</h1>
    </center>
  );
}

export default App;
