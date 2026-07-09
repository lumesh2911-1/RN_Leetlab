import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import StackNavigatorScreen from './stack/StackNavigatorScreen';
import { useTheme } from '../context/ThemeContext';
import { FONTS } from '../constants/fonts';

export default function RootNavigationScreen() {
  const { colors, isDark } = useTheme();

  const navigationTheme: Theme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      background: colors.background,
      card: colors.surface,
      text: colors.text,
      primary: colors.primary,
    },
    fonts: {
      regular: { fontFamily: FONTS.regular, fontWeight: 'normal' },
      medium: { fontFamily: FONTS.medium, fontWeight: 'normal' },
      bold: { fontFamily: FONTS.bold, fontWeight: 'normal' },
      heavy: { fontFamily: FONTS.extraBold, fontWeight: 'normal' },
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <StackNavigatorScreen />
    </NavigationContainer>
  );
}
