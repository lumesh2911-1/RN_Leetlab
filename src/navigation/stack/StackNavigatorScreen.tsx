import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/common/SplashScreen';
import BottomNavigatorScreen from '../bottom/BottomNavigatorScreen';
import DrawerNavigatorScreen from '../drawer/DrawerNavigatorScreen';
import LoginScreen from '../../screens/auth/LoginScreen';

const Stack = createStackNavigator();
export default function StackNavigatorScreen() {
  return (
    <Stack.Navigator initialRouteName="drawerNavigator">
      <Stack.Screen
        name="splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="bottomNavigator"
        component={BottomNavigatorScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="drawerNavigator" component={DrawerNavigatorScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
