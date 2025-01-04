import React from 'react';
import { SafeAreaView } from 'react-native';
import DrawerOverlay from '../src/components/DrawerOverlay'; // Assuming DrawerOverlay is in the same directory
import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';
import OtpScreen from './screens/OtpScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './screens/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';



const App: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen name="landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="otp" component={OtpScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={SignUpScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" component={DrawerOverlay}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
  );
};

export default App;
