import React from 'react';
import { SafeAreaView } from 'react-native';
import DrawerOverlay from '../src/components/DrawerOverlay'; // Assuming DrawerOverlay is in the same directory
import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';
import OtpScreen from './screens/OtpScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OtpScreen />
    </SafeAreaView>
  );
};

export default App;
