import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import Card from '../utils/Card';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons from react-native-vector-icons


const DrawerOverlay: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const translateX = useState(new Animated.Value(-400))[0]; // Start off-screen on the left
  const Tab = createBottomTabNavigator();

  const toggleModal = () => {
    if (isModalVisible) {
      // Close the modal with an animation
      Animated.timing(translateX, {
        toValue: -400, // Move back off-screen to the left
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsModalVisible(false)); // Close the modal after animation
    } else {
      setIsModalVisible(true);
      // Open the modal with an animation
      Animated.timing(translateX, {
        toValue: 0, // Move the modal into view
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={toggleModal} />

      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => (
                <Image
                  source={focused ? require('./assets/home-active.png') : require('./assets/home-inactive.png')}
                  style={{ width: 25, height: 25 }}
                />
              )


          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Menu') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Wallet') {
              iconName = focused ? 'person' : 'person-outline';
            }else if (route.name === 'Portfolio') {
                iconName = focused ? 'person' : 'person-outline';
              }
            // You can return any component that you like here, including custom images
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingBottom: 10, height: 60 },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: 'Menu' }}
        />
        <Tab.Screen
          name="Settings"
          component={DetailsScreen}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{ tabBarLabel: 'Wallet' }}
        />
         <Tab.Screen
          name="Profile"
          component={DetailsScreen}
          options={{ tabBarLabel: 'Portfolio' }}
        />
      </Tab.Navigator>
    </NavigationContainer>

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="none" // Disable built-in animation, we'll use our custom animation
        onRequestClose={toggleModal}
      >
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.overlay} onPress={toggleModal} />
          <Animated.View style={[styles.modal, { transform: [{ translateX }] }]}>
            <View style = {{height:50}}>
            <Card title="User Profile" image1={require('../assets/images/profile.jpg')} image2={require('../assets/images/profile.jpg')} backgroundColor="white" isHeader={true} />
            </View>
          <View style={{marginTop:40}}>
          <Card title="Profile" image1={require('../assets/images/profile_circle.png')} image2={require('../assets/images/navigation_arrow.png')} backgroundColor="white" isHeader={false}/>
          <Card title="Subscription" image1={require('../assets/images/subscription.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} />
          <Card title="Exchange" image1={require('../assets/images/exchange.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false}/>
          <Card title="Security" image1={require('../assets/images/security.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} />
          <Card title="Activity Logs" image1={require('../assets/images/activity_log.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false}/>
          <Card title="Notification" image1={require('../assets/images/notification.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false}/>
          </View>
            <Button title="Close Modal" onPress={toggleModal} />
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay
    justifyContent: 'flex-start',
    alignItems: 'flex-start', // Align modal to the left side
  },
  modal: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'flex-start',
    elevation: 5, // Shadow for Android
  },
  modalContent: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default DrawerOverlay;
