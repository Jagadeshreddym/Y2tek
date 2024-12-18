// screens/DetailsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuScreen from '../MenuScreen';
import LinearGradient from 'react-native-linear-gradient';

const Wallet = () => {
  return (
    <View style={styles.shadowBox}>
        
        <LinearGradient
          colors={['#2AACF5', '#9100EB' ]}
          style={styles.linearGradient}
        >
           
        </LinearGradient>
      </View>
  );
}

const styles =  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    linearGradient: {
      height: 200,
      width: '100%',
      marginTop:-10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    shadowBox: {
      width: '100%',
      height: 203,
      backgroundColor: '#b5cbf6',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,  // Rounded corners
      // iOS Shadow
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, // Horizontal & vertical offset
      shadowOpacity: 0.8,   // Shadow opacity (0 to 1)
      shadowRadius: 6,      // How much to blur the shadow
      // Android Shadow (Elevation)
      elevation: 8,  // Increase to make the shadow more prominent
    },
  });
export default Wallet;
