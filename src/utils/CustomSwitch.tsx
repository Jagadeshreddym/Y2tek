import { View, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useState } from 'react';


const CustomSwitch = ({ onValueChange, value }) => {
    const [switchValue, setSwitchValue] = useState(value);
    const translateX = new Animated.Value(switchValue ? 20 : 0); // Animated value to slide the circle
  
    // Handle switch toggle
    const toggleSwitch = () => {
      const newValue = !switchValue;
      setSwitchValue(newValue);
      Animated.spring(translateX, {
        toValue: newValue ? 40 : 0,
        useNativeDriver: true,
      }).start();
      onValueChange(newValue); // Notify parent component
    };
  
    return (
      <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.7}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
          }}
        >
          {/* Custom Switch Track */}
          <View
            style={{
              width: 50,
              height: 25,
              borderRadius: 20,
              backgroundColor: switchValue ? '#4cd137' : '#ccc',
              justifyContent: 'center',
              padding: 5,
            }}
          >
            {/* Custom Circle */}
            <Animated.View
              style={{
                width: 20,
                height: 20,
                borderRadius: 15,
                backgroundColor: 'white',
                transform: [{ translateX }],
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  export default CustomSwitch;