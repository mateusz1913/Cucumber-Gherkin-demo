import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './navigation';

export const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};
