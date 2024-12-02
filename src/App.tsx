import React from 'react';
import { SafeAreaView } from 'react-native';
import DrawerOverlay from '../src/components/DrawerOverlay'; // Assuming DrawerOverlay is in the same directory

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerOverlay />
    </SafeAreaView>
  );
};

export default App;
