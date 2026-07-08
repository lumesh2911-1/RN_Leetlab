import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigatorScreen from './stack/StackNavigatorScreen';


export default function RootNavigationScreen() {
  return (
    <NavigationContainer>
      <StackNavigatorScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
