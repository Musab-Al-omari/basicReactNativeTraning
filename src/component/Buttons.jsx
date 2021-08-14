import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Buttons({ name, increaseColor, decreaseColor }) {
  return (
    <>
      <Text style={{ textAlign: 'center' }}>{name}</Text>
      <Button title={`increase ${name}`} onPress={() => increaseColor()} />
      <Button title={`decrease ${name}`} onPress={() => decreaseColor()} />
    </>
  );
}
