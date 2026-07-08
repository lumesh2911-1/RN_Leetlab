import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigatorScreen = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="profile" component={ProfileScreen} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigatorScreen