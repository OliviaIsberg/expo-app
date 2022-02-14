import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './Start';
import ImageScreen from './Images';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Start' component={StartScreen}></Stack.Screen>
      <Stack.Screen name='Image' component={ImageScreen}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;


