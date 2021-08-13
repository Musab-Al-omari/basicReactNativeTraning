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
    </>
  );
};

export default HomeScreen;
