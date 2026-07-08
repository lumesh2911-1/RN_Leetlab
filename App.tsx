import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigationScreen from './src/navigation/RootNavigationScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigationScreen />
    </SafeAreaProvider>
  );
};

export default App;
