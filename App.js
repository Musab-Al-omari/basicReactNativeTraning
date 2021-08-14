import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/HomeScreen'
import ImageShower from './src/ImageShower';
import List from './src/List';
import Counter from './src/Counter'
import AddColor from './src/AddColor';
import ChangeColor from './src/ChangeColor'
import ReducerChangeColor from './src/NewChangeColor'
// import { View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='ImageShower' component={ImageShower} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Counter' component={Counter} />
        <Stack.Screen name='Add Color' component={AddColor} />
        <Stack.Screen name='Change Color' component={ChangeColor} />
        <Stack.Screen name='Reducer Change Color' component={ReducerChangeColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






