import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Home() {
  return (
    <View  style={styles.shadowBox} >
        
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
      height: 470,
      width: '100%',
      marginTop:-10,
      borderRadius: 10,  // Rounded corners

    },
    shadowBox: {
        width: '100%',
        height: 473,
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
