import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HelpAndSupportScreen from './HelpAndSupportScreen';
import NotificationScreen from './NotificationScreen';
import PrivacyAndPolicyScreen from './PrivacyAndPolicyScreen';
import TermsAndConditionScreen from './TermsAndConditionScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigatorScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="helpAndSupport" component={HelpAndSupportScreen} />
      <Drawer.Screen name="notification" component={NotificationScreen} />
      <Drawer.Screen
        name="privacyAndPolicy"
        component={PrivacyAndPolicyScreen}
      />
      <Drawer.Screen
        name="termsAndCondition"
        component={TermsAndConditionScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorScreen;
