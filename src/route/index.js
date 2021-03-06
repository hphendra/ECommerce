import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Order} from '../pages';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;
