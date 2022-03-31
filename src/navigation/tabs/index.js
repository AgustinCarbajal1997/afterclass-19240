import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search} from '../stacks';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Buscador" component={Search} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
