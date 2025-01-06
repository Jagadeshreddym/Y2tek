import React from 'react';
import {  View, TouchableOpacity, Alert, Text, Image, StyleSheet, ScrollView} from 'react-native';

const ActivityLogs = () => {

const tabs = ['Feb 15, 2024 - Today', 'Feb 14, 2024 - Yesterday', 'Feb 13, 2024 - Sunday'];

const logs = ['1', '2', '3'];

return (
    <View style={{ height: "100%", flexDirection: 'column' }}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
                <Image source={require('../../assets/images/robo_bolt.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.text}>Activity Logs</Text>
        </View>
        <ScrollView style={{ marginTop: 10 }}>
            <View style={styles.row}>
                {tabs.map((tab, index) => (
                    <View>
                        <View style={styles.separatorLine}></View>
                    <Text style={styles.dateText}>{tab}</Text>
                        {logs.map((log, index) => (
                            <View style={styles.rowContainer}>
                                <View style={styles.timeContainer}>
                                    <Image source={require('../../assets/images/robo_bolt.png')} style={styles.timeIcon} />
                                    <Text style={styles.timeText}>02:10 PM</Text>
                                </View>

                                <View style={styles.accessDetailsContainer}>
                                    <Text style={styles.rowText}>Logged In</Text>
                                    <View style={styles.rowContainerOS}>
                                        <View style={styles.rowContainerOS}>
                                            <Image source={require('../../assets/images/robo_bolt.png')} style={styles.icon} />
                                             <Text style={styles.rowText}>Windows</Text>
                                        </View>
                                        <View style={styles.rowContainerOS}>
                                            <Image source={require('../../assets/images/robo_bolt.png')} style={styles.icon} />
                                            <Text style={styles.rowText}>Chrome</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
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

  dateText: {
    color: 'black', // Text color
    fontSize: 14,   // Text font size
    marginLeft: 15,
    marginRight: 15,
  },

  row: {
    color: 'black', // Text color
    fontSize: 14,   // Text font size
  },

  rowContainer: {
    height: 80,
    marginTop: 10,
    flexDirection: 'row', // Aligns image and text horizontally
    // backgroundColor: 'red'
    marginLeft: 10,
    marginRight: 10,
  },

  timeContainer: {
    marginTop: 10,
    marginBottom: 10,
    // backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center', // Center aligns both image and text vertically
    width: 80,
  },

  rowContainerOS: {
    height: 50,
    flexDirection: 'row', // Aligns image and text horizontally
  },

  accessDetailsContainer: {
    flex: 1, // Take up remaining space between the images
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Horizontal & vertical offset
    shadowOpacity: 0.1,   // Shadow opacity (0 to 1)
    shadowRadius: 6,      // How much to blur the shadow
    // Android Shadow (Elevation)
     elevation: 8,  // Increase to make the shadow more prominent
  },

  rowText: {
    color: 'black', // Text color
    fontSize: 13,   // Text font size
    marginLeft : 10,
    marginTop: 10,
  },

  timeText: {
    color: 'black', // Text color
    fontSize: 12,   // Text font size
    marginLeft : 10,
    marginTop: 5,
  },

  timeIcon: {
    width: 35,  // Set the width of the image
    height: 35, // Set the height of the image
  },

  separatorLine: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },

});

export default ActivityLogs;