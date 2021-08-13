import React, { useState } from 'react';
import { Button, Text } from 'react-native';

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Button title="increase" onPress={() => setCounter(counter + 1)} />
      <Button title="decrease" onPress={() => setCounter(counter - 1)} />
      <Text>my counter now {counter}</Text>
    </>
  );
}

export default Counter;
