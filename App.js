import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/HomeScreen'
import hello from './src/hello';
import List from './src/List';
// import { View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='hello' component={hello} />
        <Stack.Screen name='List' component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






