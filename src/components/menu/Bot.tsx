import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  View, StyleSheet, TouchableOpacity, Text, Image, Button, ScrollView} from 'react-native';


const Bot = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();  // This goes back to the previous screen in the stack
    };

    const plans = ['1', '2', '3'];
    const [selectedTab, setSelectedTab] = useState(0); // Initially, the first tab is selected

    const handleTabPress = (index: React.SetStateAction<number>) => {
        console.log("Selected Index", index)
        setSelectedTab(index); // Update the selected tab index
    }; 

return (
    <View style={styles.container}>
        <View style={{ backgroundColor: "#2AACF5", width: "100%", height: 130 }}>
            <View
                style={{
                    backgroundColor: "white",
                    flexDirection: "row",
                    padding: 10,
                    borderBottomEndRadius: 10,
                    borderBottomLeftRadius: 10,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={styles.button} onPress={handleGoBack}>
                        <Image source={require('../../assets/images/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Bots</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <View style={styles.viewContainer}>
                <View style={styles.view}>
                    <Text style={styles.titleText}>REALIZED P&L</Text>
                    <Text style={styles.priceText}>$140</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.titleText}>UNREALIZED P&L</Text>
                    <Text style={styles.priceText}>$120</Text>
                </View>
            </View>
        </View>

        <ScrollView style={styles.scrollContainer}>
            <View style={styles.tapContainer}>
                <View style={styles.subView}>
                    <Image
                        source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                    />
                    <Text style={styles.text_1}>P&L</Text>
                    <Image
                        source={require("../../assets/images/navigate.png")}
                        style={{ marginEnd: 2, justifyContent: "flex-end" }}
                    />
                </View>
                <View style={styles.subView}>
                    <Image
                        source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                    />
                    <Text style={styles.text_1}>Trade book</Text>
                    <Image
                        source={require("../../assets/images/navigate.png")}
                        style={{ marginEnd: 2, justifyContent: "flex-end" }}
                    />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <Text style={styles.text_1}>Search</Text>
            </View>

            <View style={styles.sortContainer}>
                <Image
                    source={require("../../assets/images/contact.png")}
                    style={{ margin: 10, justifyContent: "flex-end" }}
                />
                <Text style={styles.titleText_3}>25 Bots</Text>
            </View>

            {plans.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.tab,
                        selectedTab === index && styles.tab, // Highlight selected tab
                    ]}
                    onPress={() => handleTabPress(index)} // Change selected tab
                >
                    <View style={styles.buyBotContainer}>
                        <View style={styles.subContainer}>
                            <Image source={require('../../assets/images/contact.png')} />
                            <Text style={styles.titleDocuments}>Bot_Name_Buy_1234</Text>
                            <Image source={require('../../assets/images/contact.png')} />
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.titleText_2}>Fiat Price</Text>
                            <Text style={styles.priceText_2}>$2.9430</Text>
                        </View>

                        <View style={styles.priceViewContainer}>
                            <View style={styles.priceView}>
                                <Text style={styles.titleText_1}>Realized</Text>
                                <Text style={styles.priceText_1}>$2.9430</Text>
                            </View>
                            <View style={styles.priceView}>
                                <Text style={styles.titleText_1}>Unrealized</Text>
                                <Text style={styles.priceText_1}>$2.9430</Text>
                            </View>
                            <View style={styles.priceView}>
                                <Text style={styles.titleText_1}>Capital</Text>
                                <Text style={styles.priceText_1}>$1000</Text>
                            </View>
                        </View>

                        <View style={styles.subContainer}>
                            <Text style={styles.titleDocuments}>Active</Text>
                            <Image source={require('../../assets/images/contact.png')} />
                            <Text style={styles.titleDocuments}>12-01-2024 to 12-01-2024</Text>
                        </View>
                    </View>
                   
                    {/* <Text style={{ color: selectedTab === index ? 'white' : '#695DCA' }}>{tab}</Text> */}
                </TouchableOpacity>
            ))}
        </ScrollView> 

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },

    button: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 5,
    },

    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },

    defaultContainer:{
        height: 65,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        justifyContent:'space-between',
        backgroundColor: 'white',
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
    },

    viewContainer: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        width: '100%',         // Ensure the container takes full width
    },
    view: {
        flex: 1,               // Equal width for each button
        backgroundColor: 'white',
        padding: 10,
        margin: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Horizontal & vertical offset
        shadowOpacity: 0.5,   // Shadow opacity (0 to 1)
        shadowRadius: 6,      // How much to blur the shadow
        // Android Shadow (Elevation)
        elevation: 8,  // Increase to make the shadow more prominent
    },

    priceView: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        // paddingLeft: 30,
        // paddingRight: 30,
        height:55,
        margin: 5,
        borderRadius: 10,
    },

    titleText: {
        color: 'black',
        fontSize: 11,
    },

    titleText_1: {
        color: '#6A5ECC',
        fontSize: 10,
        paddingTop: 10,
        paddingLeft: 10,
    },

    titleText_2: {
        color: '#6A5ECC',
        fontSize: 10,
        paddingLeft: 10,
    },

    titleText_3: {
        color: '#6A5ECC',
        fontSize: 14,
        paddingTop: 10,
    },

    priceText: {
        color: 'black',
        fontSize: 16,
    },

    priceText_1: {
        color: 'black',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 10,
    },

    priceText_2: {
        color: 'black',
        fontSize: 15,
        paddingLeft: 10,
    },

    tapContainer: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        width: '100%',         // Ensure the container takes full width
        height: 70,
    },

    subView: {
        height: 40,        // Equal width for each button
        backgroundColor: 'white',
        padding: 10,
        margin: 12,
        borderRadius: 8,
        borderColor:'#C8CED1',
        borderWidth: 1,
        flex: 1,
        flexDirection: "row",
        // borderBottomEndRadius: 10,
        // borderBottomLeftRadius: 10,
        // alignItems: "center",
        width: "100%",
        justifyContent: "space-between"
    },

    timeIcon: {
        width: 25,  // Set the width of the image
        height: 25, // Set the height of the image
    },

    text_1: {
        color: 'black',
        fontSize: 16,
        marginLeft: 5,
    },

    searchContainer: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        // width: '100%',         // Ensure the container takes full width
        height: 40,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
        borderColor: '#C8CED1',
        borderWidth: 1,
    },

    priceContainer: {
        // flex: 1,
        justifyContent: 'space-evenly',
        // flexDirection: 'row', // Aligns image and text horizontally
        // marginTop:10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        height: 55,
        backgroundColor: '#F2F2F7',
        borderRadius: 8,
        // alignItems : 'center'
    },

    priceViewContainer: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        // marginTop:10,
        // marginBottom:10,
        marginLeft:5,
        marginRight:5,
        height: 60,
        backgroundColor : 'white',
        borderRadius: 8,
        alignItems : 'center'
    },

    sortContainer: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        // width: '100%',         // Ensure the container takes full width
        height: 40,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    buyBotContainer: {
        flex: 1,
        // flexDirection: 'row',  // Arrange buttons horizontally
        // width: '100%',         // Ensure the container takes full width
        height: 210,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    BotListContainer: {
        height: 85,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: '#C8CED1',
        borderWidth: 1,
        marginTop:15,
        marginBottom:15,
        marginLeft:15,
        flexDirection: 'row',  // Arrange buttons horizontally
        width: '100%',         // Ensure the container takes full width
      },

    scrollContainer: {
        flex: 1,
        // flexDirection: 'row',  // Arrange buttons horizontally
        width: '100%',         // Ensure the container takes full width
        // height: 40,
        // alignItems: "center",
        // height: 300,
    },

    subContainer: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        width: '100%',
        // flex: 1,
        height: 30,
        // backgroundColor: 'gray'
      },
    
      titleDocuments: {
        flex: 1, // Take up remaining space between the images
        fontSize: 15,
        alignItems:'center',
        marginLeft: 5,
      },


  infoDocumentsView:{
    flexDirection: 'row', // Aligns image and text horizontally
    backgroundColor: '#BE3340',
    marginRight: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 30,
    width: 100,
  },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#D8D5EE',
    },
});

export default Bot;