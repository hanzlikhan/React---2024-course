const redux = require('redux');

// Initial state hook
const INITIAL = {
   counter: 0
};

// Reducer function
const reducer = (store = INITIAL, action) => {
  let newstore = store;
  
  if (action.type === "INCREMENT") {
      newstore = { counter: store.counter + 1 };
  }else if (action.type === "DECREMENT"){
      newstore = {counter : store.counter - 1};
  }else if (action.type === "ADDITION"){
      newstore = {counter : store.counter + action.payload.number};
  }
  
  return newstore;
};

// Create store
const store = redux.createStore(reducer);

// Subscriber function
const subscriber = () => {
    const state = store.getState();  // Correctly accessing the state
    console.log('Current state:', state);
};

// Subscribe to store changes
store.subscribe(subscriber);

// Dispatch an action
store.dispatch({ type: 'INCREMENT' });
store.dispatch({type : "DECREMENT"});
store.dispatch({type: "ADDITION", payload: {number: 7} })
store.dispatch({type : "DECREMENT"});


