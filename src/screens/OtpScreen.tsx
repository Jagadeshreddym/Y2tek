import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '','','']);
  const inputRefs = useRef([]);

  const handleChangeText = (value, index) => {
    // Update OTP state
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    // Automatically focus next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

 

  return (
    <View style={{flexDirection:'column',flex:1}}>
    <Image source={require('../assets/images/frame.png')} style={{height:'30%', width:'100%'}}/>
     <View style={styles.box}>
     <View style={styles.container}>
      
      <Text style={{fontSize: 20, margin:10,textAlign:'left'}}>Verification Required</Text>
      <Text style={{fontSize: 18,  margin:10,textAlign:'left'}}>Enter the code sent to user@gmail.com</Text>
      
     
     <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handleChangeText(value, index)}
            value={otp[index]}
            ref={(el) => (inputRefs.current[index] = el)}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <View style={styles.textRow}>
      <Text style={styles.leftText}>05:00</Text>
      <Text style={styles.rightText}>Didn’t receive the code? RESEND</Text>
      
      </View>
       {/* Sign Up Button */}
       <TouchableOpacity style={styles.signupButton} onPress={()=>  navigation.navigate('dashboard')}>
            <Text style={styles.buttonTextSignUP}>Continue</Text>
        </TouchableOpacity>
      </View>
      </View>
      
      
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop:10,
    borderTopStartRadius: 10,
    borderTopEndRadius:10,
    height: 600,
  },
  textRow: {
    flexDirection: 'row', // Aligns text in a row
    justifyContent: 'space-between', // Space between left and right text
    alignItems: 'center', // Aligns items vertically
  },
  leftText: {
    fontSize: 10,
    color: 'black',
    marginLeft:10,
  },
  rightText: {
    fontSize: 10,
    color: 'black',
    marginRight:10,
  },
  signupButton:{
    backgroundColor: '#6C5DD3',  // Background color of the button
    paddingVertical: 12,         // Vertical padding for the button
    paddingHorizontal: 20,       // Horizontal padding for the button
    borderRadius: 8,             // Rounded corners
    alignItems: 'center',        // Centers the text horizontally
    justifyContent: 'center',    // Centers the text vertically
    height: 50,
    width:'95%',
    margin:10,
    
  },
  buttonTextSignUP: {
    color: '#fff',               // Text color (white)
    fontSize: 16,                // Font size
    fontWeight: 'bold', 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  otpContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderTopStartRadius: 10,
    borderTopEndRadius:10,
    marginTop:10,
    flexDirection:'row'
    
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  submitButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  box: {
    width: '100%',
    height: '50%',
    backgroundColor: '#9787f4',
    borderRadius: 10,
    marginTop:-20,
    // iOS shadow properties
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Offset of the shadow
    shadowOpacity: 0.3, // Transparency of the shadow
    shadowRadius: 6, // Blur radius of the shadow
    // Android elevation property
    elevation: 5,
  },
  horizontal_container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default OtpScreen;
