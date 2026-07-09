import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function AppStatusBar() {
  const { colors, isDark } = useTheme();

  return (
    <StatusBar
      animated
      barStyle={isDark ? 'light-content' : 'dark-content'}
      backgroundColor={Platform.OS === 'android' ? colors.background : undefined}
    />
  );
}
