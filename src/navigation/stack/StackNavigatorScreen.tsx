import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/common/SplashScreen';
import BottomNavigatorScreen from '../bottom/BottomNavigatorScreen';
import DrawerNavigatorScreen from '../drawer/DrawerNavigatorScreen';

const Stack = createStackNavigator();
export default function StackNavigatorScreen() {
  return (
    <Stack.Navigator>
         <Stack.Screen
        name="drawer"
        component={DrawerNavigatorScreen}
   
      />
      <Stack.Screen
        name="bottom"
        component={BottomNavigatorScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

     
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
