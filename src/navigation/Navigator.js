import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Battle from 'src/screens/Battle';
import Home from 'src/screens/Home';
import Initial from 'src/screens/Initial';
import Settings from 'src/screens/Settings';
import Dungeon from 'src/screens/Dungeon';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

function Main() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dungeon" component={Dungeon} />
      <Stack.Screen name="Battle" component={Battle} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function Navigator() {
  return <Main />;
}
