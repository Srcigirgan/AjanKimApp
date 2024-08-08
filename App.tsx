import React from 'react';
import MainTabScreen from './assets/screens/MainTabScreen';
import { LogBox } from "react-native"
LogBox.ignoreAllLogs(true)
const App = () => {
  return <MainTabScreen />;
};

export default App;
