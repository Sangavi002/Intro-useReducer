import React, { useReducer } from "react";
import './App.css';

const Countreducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: throw Error('Invalid');
  }
};

const Togglereducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": return !state;
    default: throw Error('Invalid');
  }
};

function App() {
  const [state, dispatch] = useReducer(Countreducer, 0);
  const [isLightTheme, dispatch1] = useReducer(Togglereducer, true);

  return (
    <div className={isLightTheme ? 'light-theme' : 'dark-theme'}>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch1({ type: 'TOGGLE_THEME' })}>Toggle Theme</button>
    </div>
  );
}

export default App;
