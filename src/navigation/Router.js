import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ref from './ref';
import Navigator from './Navigator';

export default function Router() {
  return (
    <NavigationContainer ref={ref}>
      <Navigator />
    </NavigationContainer>
  );
}
