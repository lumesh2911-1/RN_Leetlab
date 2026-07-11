import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function AppStatusBar() {
  const { colors, isDark } = useTheme();
  const statusBarStyle = isDark ? 'light-content' : 'dark-content';
  const statusBarBackground =
    Platform.OS === 'android' ? colors.surface : undefined;

  return (
    <StatusBar
      animated
      barStyle={statusBarStyle}
      backgroundColor={statusBarBackground}
      translucent={false}
    />
  );
}
