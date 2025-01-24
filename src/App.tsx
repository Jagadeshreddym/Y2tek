import React, { useEffect, useState } from 'react';
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
import BotBuyName from './components/menu/BotBuyName';
import BotSummary from './components/menu/BotSummary';
import BotSummartAI from './components/menu/BotSummartAI';
import BotPerformance from './components/menu/BotPerformance';
import LiveOrderBook from './components/menu/LiveOrderBook';
import Geolocation from 'react-native-geolocation-service';  // Geolocation library
import Geocoding from 'react-native-geocoding';  // Geocoding library

// Initialize Geocoding with your Google Maps API key
Geocoding.init('AIzaSyDRRtJxvr9Vf25MFPjYCNXuwsi9-qAUglQ');  // Replace with your API key

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const Stack = createStackNavigator();

  // Function to get current location and address
  const getCurrentAddress = () => {
    setLoading(true);
    setError('');

    // Get current position using geolocation
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Use reverse geocoding to get the address from the coordinates
        try {
          const response = await Geocoding.from(latitude, longitude);
          const result = response.results[0];  // Get the first result
          if (result) {
            setAddress(result.formatted_address);  // Set the address to state
          } else {
            setError('No address found');
          }
        } catch (err) {
          setError('Error in reverse geocoding');
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);
        setError('Error getting location');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    // Get current address on first render or whenever needed
    getCurrentAddress();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }} >
     <NavigationContainer>
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen name="landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="otp" component={OtpScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={SignUpScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" component={DrawerOverlay}  options={{ headerShown: false }}/>
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
