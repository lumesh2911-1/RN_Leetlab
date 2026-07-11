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
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
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
      <Stack.Screen
        name="notifications"
        component={NotificationScreen}
        options={{ title: 'Notifications' }}
      />

      <Stack.Screen
        name="helpAndSupport"
        component={HelpAndSupportScreen}
        options={{ title: 'Help & Support' }}
      />
      <Stack.Screen
        name="privacyPolicy"
        component={PrivacyAndPolicyScreen}
        options={{ title: 'Privacy Policy' }}
      />
      <Stack.Screen
        name="personalInfo"
        component={ProfileInfoScreen}
        options={{ title: 'Personal Info' }}
      />
      <Stack.Screen
        name="termsAndConditions"
        component={TermsAndConditionScreen}
        options={{ title: 'Terms & Conditions' }}
      />
    </Stack.Navigator>
  );
}
