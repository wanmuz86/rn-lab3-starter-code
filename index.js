/**
 * @format
 */
// Import gesture handler globally
// as it is needed for the drawer
import "react-native-gesture-handler";

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
