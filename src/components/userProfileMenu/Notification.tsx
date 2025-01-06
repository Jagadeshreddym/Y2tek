// screens/Notification.tsx

import React, { useState } from 'react';
import {  View, Text, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import OptionsList from '../../utils/OptionsList';

const Notification = () => {
  const [contentBot, setContentBot] = useState(['Create', 'Schedule', 'Status', 'Delete']);
  const [contentTrade, setContentTrade] = useState(['Create', 'Schedule', 'Status', 'Delete']);
  // const [contentBackTest, setContentBackTest] = useState(['Backtext Notification']);
  const [contentAcc, setContentAcc] = useState(['New device login', 'Password change', 'Mobile number change', 'Email change']);
  const [contentWallet, setContentWallet] = useState(['Reacharge','Withdrawal', 'Deposite', 'Trade']);
  
return (
  <View style={{ height: "100%", flexDirection: 'column' }}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
        <Image source={require('../../assets/images/back.png')}  />
      </TouchableOpacity>
      <Text style={styles.text}>Notification</Text>
    </View>
    <ScrollView style={{marginTop:10}}>
      <View style={{marginLeft:20, marginRight:20}}>
        {/* Table Header */}
        <OptionsList title="Bot" notificationType ="Bot Notification"  image1={require('../../assets/images/robo_bolt.png')} backgroundColor="white"/>

        <OptionsList title="Paper Trade"  notificationType ="Paper Trade Notification" image1={require('../../assets/images/paper_trade.png')} backgroundColor="white"/>

        <OptionsList title="Backtest"  notificationType ="Backtext Notification" image1={require('../../assets/images/paper_trade.png')} backgroundColor="white"/>

        <OptionsList title="Account"  notificationType ="Account Notification" image1={require('../../assets/images/robo_bolt.png')} backgroundColor="white"/>

        <OptionsList title="Walet"  notificationType ="Wallet Notification" image1={require('../../assets/images/wallet_focus.png')} backgroundColor="white"/>

      </View>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor: 'white',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderRadius: 5,
    flexDirection: 'row', // Aligns image and text horizontally
    alignItems: 'center', // Center aligns both image and text vertically
  },
  button: {
    flexDirection: 'row', // Aligns image and text horizontally
    alignItems: 'center', // Center aligns both image and text vertically
    backgroundColor: 'white', // Button background color
    height:50,
    marginLeft:10,
  },
  icon: {
    width: 30,  // Set the width of the image
    height: 20, // Set the height of the image
  },
  text: {
    color: 'black', // Text color
    fontSize: 16,   // Text font size
    marginLeft : 10,
  },
});

export default Notification;
