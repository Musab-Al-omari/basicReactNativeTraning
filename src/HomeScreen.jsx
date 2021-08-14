import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({});

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Button title="homeScreen" />
      <Button
        onPress={() => navigation.navigate('ImageShower')}
        title="Image Shower"
      />
      <Button onPress={() => navigation.navigate('List')} title="List" />
      <Button onPress={() => navigation.navigate('Counter')} title="Counter" />
      <Button
        onPress={() => navigation.navigate('Add Color')}
        title="Add Color"
      />
      <Button
        onPress={() => navigation.navigate('Change Color')}
        title="Change Color"
      />
      <Button
        onPress={() => navigation.navigate('Reducer Change Color')}
        title="Change Color with reducer"
      />
    </>
  );
};

export default HomeScreen;
