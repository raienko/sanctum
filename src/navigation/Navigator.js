import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Battle from 'src/screens/Battle';
import Home from 'src/screens/Home';
import Initial from 'src/screens/Initial';
import Settings from 'src/screens/Settings';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Battle" component={Battle} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function Navigator() {
  return <Main />;
}
