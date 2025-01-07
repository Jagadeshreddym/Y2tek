import React, {useState} from 'react';
import {  View, TouchableOpacity, Image, Text, StyleSheet, Alert, ScrollView} from 'react-native';

const Subscriptions = () => {
    const subscriptions = ['Active Subscriptions', 'Available Subscriptions',];
    const [selectedTab, setSelectedTab] = useState(0); // Initially, the first tab is selected

    const plans = ['Papertrade', 'Bots'];

    const handleTabPress = (index: React.SetStateAction<number>) => {
        console.log("Selected Index", index)
        setSelectedTab(index); // Update the selected tab index
    };

    return (
        <View style={{ height: "100%", flexDirection: 'column' }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
                        <Image source={require('../../assets/images/back.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Subscriptions</Text>
                </View>


            <View style={styles.tabBar}>
                {subscriptions.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.tab,
                            selectedTab === index && styles.selectedTab, // Highlight selected tab
                        ]}
                        onPress={() => handleTabPress(index)} // Change selected tab
                    >
                        <Text style={{ color: selectedTab === index ? 'white' : '#695DCA' }}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView style={{ marginTop: 10 }}>
                <View style={styles.row}>
                    {plans.map((tab, index) => (
                        <View>
                        <View style={styles.rowContainer}>
                            <Image source={require('../../assets/images/robo_bolt.png')} style={styles.icon} />
                            <Text style={styles.text}>{tab}</Text>
                            <Image source={require('../../assets/images/robo_bolt.png')} style={styles.icon} />
                        </View>
                            {/* <View>
                                <Text style={styles.text}>Available</Text>
                            </View> */}

                            {/* <View style={styles.separatorLine}></View> */}

                            <View>
                                <TouchableOpacity onPress={() => alert('Button pressed!')}>
                                    <Text style={styles.text}>Recharge</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('Button pressed!')}>
                                    <Text style={styles.text}>Add More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    ))}
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.switchPlanText}>Siwtch to combined plan</Text>
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
        height: 50,
        marginLeft: 10,
    },
    icon: {
        width: 30,  // Set the width of the image
        height: 20, // Set the height of the image
    },
    text: {
        color: 'black', // Text color
        fontSize: 16,   // Text font size
        marginLeft: 10,
    },

    tabBar: {
        flexDirection: 'row',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        width: '95%',
        marginTop: 20,
        marginLeft: '2.5%'
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D5EE',
    },

    selectedTab: {
        backgroundColor: '#695DCA', // Background for selected tab
    },

    bottomView: {
        borderRadius: 5,
        backgroundColor: '#5281EA',
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
    },

    switchPlanText: {
        color: 'white', // Text color
        fontSize: 15,   // Text font size
    },

    row: {
        color: 'black', // Text color
        fontSize: 14,   // Text font size
    },

    rowContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
    },

    separatorLine: {
        height: 1,
        backgroundColor: 'gray',
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
    },

    subContainer: {

        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
});

export default Subscriptions;