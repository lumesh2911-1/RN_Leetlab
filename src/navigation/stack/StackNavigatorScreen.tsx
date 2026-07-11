import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/common/SplashScreen';
import BottomNavigatorScreen from '../bottom/BottomNavigatorScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import NotificationScreen from '../../screens/main/NotificationScreen';

const Stack = createStackNavigator();
export default function StackNavigatorScreen() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return (
    <Stack.Navigator>
      {showSplash && (
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      )}
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
      <Stack.Screen name="notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
