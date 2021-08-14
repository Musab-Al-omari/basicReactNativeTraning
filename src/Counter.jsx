import React, { useState, useReducer } from 'react';
import { Button, Text } from 'react-native';

function reducer(state, action) {
  // state=0
  // action {type:increment,decrement ,payload:1}

  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <Button
        title="increase"
        onPress={() => dispatch({ type: 'increment', payload: 1 })}
      />
      <Button
        title="decrease"
        onPress={() => dispatch({ type: 'decrement', payload: 1 })}
      />
      <Text>my counter now {state}</Text>
    </>
  );
}

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <>
//       <Button title="increase" onPress={() => setCounter(counter + 1)} />
//       <Button title="decrease" onPress={() => setCounter(counter - 1)} />
//       <Text>my counter now {counter}</Text>
//     </>
//   );
// }

export default Counter;
