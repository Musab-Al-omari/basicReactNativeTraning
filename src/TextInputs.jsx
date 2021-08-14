import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default function TextInputs() {
  const [state, setState] = useState('');
  const [pass, setPass] = useState('');
  return (
    <>
      <Text>Enter Your Name</Text>
      <TextInput
        value={state}
        onChangeText={(newValue) => setState(newValue)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>Your Name IS :{state}</Text>

      <Text>Enter Your PASS</Text>
      <TextInput
        value={pass}
        onChangeText={(newValue) => setPass(newValue)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {pass.length > 4 ? null : (
        <Text>Your Pass should be bigger than 4 letters :</Text>
      )}
    </>
  );
}
