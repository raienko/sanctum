// navigation optimization
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();

import {AppRegistry} from 'react-native';
import App from './src';
import {name} from './package.json';

AppRegistry.registerComponent(name, () => App);
