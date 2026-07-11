import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/common/SplashScreen';
import BottomNavigatorScreen from '../bottom/BottomNavigatorScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import NotificationScreen from '../../screens/main/NotificationScreen';
import HelpAndSupportScreen from '../../screens/main/profile/HelpAndSupportScreen';
import PrivacyAndPolicyScreen from '../../screens/main/profile/PrivacyAndPolicyScreen';
import ProfileInfoScreen from '../../screens/main/profile/ProfileInfoScreen';
import TermsAndConditionScreen from '../../screens/main/profile/TermsAndConditionScreen';

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
      <Stack.Screen name="notifications" component={NotificationScreen} />

      {/* Profile Section */}
      <Stack.Screen name="help-and-support" component={HelpAndSupportScreen} />
      <Stack.Screen name="privacy-policy" component={PrivacyAndPolicyScreen} />
      <Stack.Screen name="personal-info" component={ProfileInfoScreen} />
      <Stack.Screen
        name="terms-and-conditions"
        component={TermsAndConditionScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
