import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{title: 'Inicio'}}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackNavigator;
