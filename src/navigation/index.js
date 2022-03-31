import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './tabs';

const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
export default Navigator;
