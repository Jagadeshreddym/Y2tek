import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  Animated,
  TouchableOpacity,
} from 'react-native';

const DrawerOverlay: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const translateX = useState(new Animated.Value(-400))[0]; // Start off-screen on the left

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

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="none" // Disable built-in animation, we'll use our custom animation
        onRequestClose={toggleModal}
      >
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.overlay} onPress={toggleModal} />
          <Animated.View style={[styles.modal, { transform: [{ translateX }] }]}>
            <Text style={styles.modalContent}>Modal Content</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay
    justifyContent: 'center',
    alignItems: 'flex-start', // Align modal to the left side
  },
  modal: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    elevation: 5, // Shadow for Android
  },
  modalContent: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default DrawerOverlay;
