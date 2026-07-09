import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';
import AppStatusBar from './src/components/AppStatusBar';
import RootNavigationScreen from './src/navigation/RootNavigationScreen';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AppStatusBar />
        <RootNavigationScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
