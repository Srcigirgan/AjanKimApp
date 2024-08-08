import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Ekranlarımızı içeri aktaralım
import MainScreen from './HomeScreens/MainScreen';
import NasilOynanir from './HomeScreens/NasilOynanir';
import GameOptions from './HomeScreens/GameOptions';
import Game from './HomeScreens/Game';
import Hakkinda from './HomeScreens/Hakkinda';
// Stack navigator oluşturalım
const Stack = createNativeStackNavigator();

// Ana içerik sayfaları
const MainStack = (navigation) => (
  <Stack.Navigator screenOptions={{ headerShown: false }} >  
    <Stack.Screen  name="MainScreen" component={MainScreen} />
    <Stack.Screen name="NasilOynanir" component={NasilOynanir} />
    <Stack.Screen name="GameOptions" component={GameOptions} />
    <Stack.Screen name="Game" component={Game} />
    <Stack.Screen name="Hakkinda" component={Hakkinda} />



  </Stack.Navigator>
);

// Ana sekme sayfamız
const MainTabScreen = () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);

export default MainTabScreen;
