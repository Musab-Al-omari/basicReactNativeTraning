import React from 'react';
import { Text, View, Image } from 'react-native';

function Picture({ name, mySource }) {
  return (
    <View>
      <Image style={{ width: 250, height: 250 }} source={mySource} />
      <Text>{name}</Text>
    </View>
  );
}

export default Picture;
