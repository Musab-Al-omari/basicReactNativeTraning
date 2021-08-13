import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Picture from './component/Picture';
const styles = StyleSheet.create({});

const ImageShower = () => {
  return (
    <>
      <Picture name="love" mySource={require('../assets/love.jpg')} />
      <Picture name="wolf" mySource={require('../assets/wolf.jpg')} />
      <Picture name="flower" mySource={require('../assets/white-flower.jpg')} />
    </>
  );
};

export default ImageShower;
