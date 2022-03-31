import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../../screens/Search';

const SearchStack = createNativeStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{title: 'Buscador'}}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
