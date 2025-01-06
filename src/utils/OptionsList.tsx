
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import CustomSwitch from './CustomSwitch';

const contentBots = ['Create', 'Schedule', 'Status', 'Delete'];
const contentAcc = ['New device login', 'Password change', 'Mobile number change', 'Email change'];
const contentWallet = ['Reacharge', 'Withdrawal', 'Deposite', 'Trade']


interface OptionsModel {
  title: string;
  notificationType:string
  image1: any;
  backgroundColor?: string;
}

const OptionsList: React.FC<OptionsModel> = ({ title, notificationType, image1, backgroundColor = 'green'}) => {

// State to keep track of the switch's value
const [isEnabled, setIsEnabled] = useState(false);

// Function to toggle the switch
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const handleSwitchChange = (newValue: any) => {
  console.log('Switch value:', newValue);
};
  return (
    <View style={[styles.listBG, { backgroundColor }]}>
      <View style={styles.container}>
        <Image source={image1} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <View style={styles.listContainerOne}>
        <Text style={styles.label}>{notificationType}</Text>
        <CustomSwitch value={true} onValueChange={handleSwitchChange} />
      </View>

      <View style={styles.listContainerHori}>
        

        <View style={styles.listContainer}>
          <View style={{flexDirection:'row', alignContent:'center',alignItems:'center'}}>
          <Image source={require("../assets/images/bell.png")} style={styles.subImage} />
          <Text style={styles.label}>{contentBots[0]}</Text>
          </View>
         
          <CustomSwitch value={false} onValueChange={handleSwitchChange} />
        </View>
        <View style={styles.line}></View>
        <View style={styles.listContainer}>
        <View style={{flexDirection:'row', alignContent:'center',alignItems:'center'}}>

          <Image source={require("../assets/images/bell.png")} style={styles.subImage} />
          <Text style={styles.label}>{contentBots[1]}</Text>
          </View>
       
        <CustomSwitch value={false} onValueChange={handleSwitchChange} />
        </View>
        <View style={styles.line}></View>
        <View style={styles.listContainer}>
        <View style={{flexDirection:'row', alignContent:'center',alignItems:'center'}}>

          <Image source={require("../assets/images/bell.png")} style={styles.subImage} />
          <Text style={styles.label}>{contentBots[2]}</Text>
          </View>
        
        <CustomSwitch value={false} onValueChange={handleSwitchChange} />
        </View>

        <View style={styles.line}></View>
        <View style={styles.listContainer}>
        <View style={{flexDirection:'row', alignContent:'center',alignItems:'center'}}>

          <Image source={require("../assets/images/bell.png")} style={styles.subImage} />
          <Text style={styles.label}>{contentBots[3]}</Text>
          </View>
        
        <CustomSwitch value={false} onValueChange={handleSwitchChange} />
        </View>



      </View>



      
    </View>
  );
};

const styles = StyleSheet.create({
    listBG: {
      backgroundColor: 'white',
      borderRadius: 5,
      paddingTop: 10, 
      paddingBottom: 10,
      paddingLeft:10,
      margin: 5,
      marginStart:-10,
      marginEnd:-10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    row: {
      flexDirection: 'row', // Align items horizontally
      alignItems:'flex-start', // Center items vertically
      justifyContent: 'space-between', // Space between items
    },
    image: {
      width: 20,
      height: 20,
      borderRadius: 5, // Make the images circular
      justifyContent:'center',
      alignItems:'center',
    },
    title: {
      flex: 1, // Take up remaining space between the images
      fontSize: 16,
      alignItems:'center',
      marginTop:4
    },

    container: {
        flex: 1, // Take up remaining space between the images
        alignItems:'center',
      },

    listContainer: {
      flexDirection: 'row', // Align items horizontally
      backgroundColor: 'clear',
      height:45,
      alignContent:'center',
      justifyContent:'space-between',
      alignItems:'center',
    },
    label: {
      fontSize: 15,
      paddingTop: 10, 
      paddingBottom: 10,
      paddingLeft:10,
    },

    listContainerHori: {
      borderRadius: 5,
      backgroundColor: '#F2F2F7',
      padding:5,
    },

    listContainerOne: {
      flexDirection: 'row', // Align items horizontally
      borderRadius: 5,
      backgroundColor: '#DAE9CD',
      height:40,
      alignContent:'center',
      justifyContent:'space-between',
      alignItems:'center',
      margin:5
    },

    subImage: {
      width: 20,
      height: 20,
      borderRadius: 5, // Make the images circular
      justifyContent:'center',
      alignItems:'center',
    },

    line: {
      flexDirection: 'row', // Align items horizontally
      backgroundColor: 'grey',
      height: 1,
      marginLeft:5,
      marginRight:5,
    },

  });

export default OptionsList;