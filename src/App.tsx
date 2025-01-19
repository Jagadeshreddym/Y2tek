import React from 'react';
import { SafeAreaView } from 'react-native';
import DrawerOverlay from '../src/components/DrawerOverlay'; // Assuming DrawerOverlay is in the same directory
import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';
import OtpScreen from './screens/OtpScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './screens/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ActivityLogs from './components/userProfileMenu/ActivityLogs';
import Notification from './components/userProfileMenu/Notification';
import Subscriptions from './components/userProfileMenu/Subscriptions';
import UserProfile from './components/userProfileMenu/UserProfile';
import Bot from './components/menu/Bot';



const App: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen name="landing" component={Bot} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="otp" component={OtpScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={SignUpScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" component={Bot}  options={{ headerShown: false }}/>
        <Stack.Screen name="notification" component={Notification}  options={{ headerShown: false }}/>
        <Stack.Screen name="activitylog" component={ActivityLogs}  options={{ headerShown: false }}/>
        <Stack.Screen name="subscription" component={Subscriptions}  options={{ headerShown: false }}/> 
        <Stack.Screen name="userprofile" component={UserProfile}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
  );
};

export default App;
