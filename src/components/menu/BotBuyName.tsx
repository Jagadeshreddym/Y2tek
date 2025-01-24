import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  View, StyleSheet, Text, Image, ScrollView,TouchableOpacity } from 'react-native';


const BotBuyName = () => {
    const navigation = useNavigation();
    const plans = ['1'];
    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };

    const [selectedTab, setSelectedTab] = useState(0); // Initially, the first tab is selected

    const handleTabPress = (index: React.SetStateAction<number>) => {
        console.log("Selected Index", index)
        setSelectedTab(index); // Update the selected tab index
    }; 

    return (
        <View style={styles.container}>
            <View style={{
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
                    <Text style={styles.text}>Bot_Name_Buy_1234</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <ScrollView style={styles.scrollContainer}>

                <View style={styles.buyBotContainer_1}>
                    <View style={styles.subContainer}>
                        <Text style={styles.titleDocuments}>Bot_Summary</Text>
                        <Image source={require('../../assets/images/navigate.png')} />
                    </View>

                    {/* <View style={styles.priceViewContainer_11}> */}
                        <View style={styles.priceView_1}>
                            <Text style={styles.titleText_1}>Graph</Text>
                        </View>
                    {/* </View> */}

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.priceView_111}>
                            <Text style={styles.titleText_1}>Symbol</Text>
                            <Text style={styles.priceText_1}>BTCUSDT</Text>
                        </View>
                        <View style={styles.priceView_111}>
                            <Text style={styles.titleText_1}>Timeframe</Text>
                            <Text style={styles.priceText_1}>5m</Text>
                        </View>
                    </View>

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.priceView_111}>
                            <Text style={styles.titleText_1}>Symbol</Text>
                            <Text style={styles.priceText_1}>BTCUSDT</Text>
                        </View>
                        <View style={styles.priceView_111}>
                            <Text style={styles.titleText_1}>Timeframe</Text>
                            <Text style={styles.priceText_1}>5m</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.mainView_1}>
                    <View style={styles.subContainer}>
                        <Text style={styles.titleDocuments}>Realized P&L</Text>
                    </View>
                    <View style={styles.priceViewContainer_1}>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Absolute</Text>
                            <Text style={styles.priceText_1}>$140</Text>
                        </View>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Percentage</Text>
                            <Text style={styles.priceText_1}>10%</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mainView_2}>
                    <View style={styles.subContainer}>
                        <Text style={styles.titleDocuments}>Unrealized P&L</Text>
                    </View>
                    <View style={styles.priceViewContainer_2}>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Absolute</Text>
                            <Text style={styles.priceText_1}>$140</Text>
                        </View>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Percentage</Text>
                            <Text style={styles.priceText_1}>10%</Text>
                        </View>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Trade Free</Text>
                            <Text style={styles.priceText_1}>$140</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.subViewWithColor}>
                    <Image
                        source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                    />
                    <Text style={styles.text_1}>Charged Interest </Text>
                    <Image
                        source={require("../../assets/images/info.png")}
                        style={{ marginTop:8, marginLeft: 5}}
                    />
                    <Text style={styles.text_2}>0</Text>
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
                                <Text style={styles.titleDocuments}>Bot Summary</Text>
                                <Image source={require('../../assets/images/navigate.png')} />
                            </View>
                            <View style={styles.priceViewContainer}>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>Symbol</Text>
                                    <Text style={styles.priceText_1}>BTCUSDT</Text>
                                </View>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>Timeframe</Text>
                                    <Text style={styles.priceText_1}>5m</Text>
                                </View>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>ML Bot</Text>
                                    <Text style={styles.priceText_1}>Buy</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}


                <View style={styles.subView}>
                    <Image
                        source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                    />
                    <Text style={styles.text_1}>Bot Performance</Text>
                    <Image
                        source={require("../../assets/images/navigate.png")}
                        style={{ marginEnd: 2, marginTop:8, justifyContent: "flex-end" }}
                    />
                </View>
                <View style={styles.subView}>
                    <Image
                        source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                    />
                    <Text style={styles.text_1}>Live Order Book</Text>
                    <Image
                        source={require("../../assets/images/navigate.png")}
                        style={{ marginEnd: 2, marginTop:8, justifyContent: "flex-end" }}
                    />
                </View>
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

    scrollContainer: {
        flex: 1,
        width: '100%',  
    },

    subView: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    subViewWithColor: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: '#F0DFCB',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    mainView_1: {
        height: 110,
        backgroundColor: '#5D4CE0',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    mainView_2: {
        // flex: 1,
        // flexDirection: 'row', // Aligns image and text horizontally
        height: 110,
        backgroundColor: '#C75178',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
        // justifyContent: "space-between"
    },

    text_1: {
        flex: 1,
        color: 'black',
        fontSize: 15,
        marginLeft: 5,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center', // Center aligns both image and text vertically
    },

    text_2: {
        color: 'black',
        fontSize: 16,
        paddingTop: 10,
        marginEnd: 10,
        justifyContent: "flex-end" ,
    },

    timeIcon: {
        width: 23,  // Set the width of the image
        height: 23, // Set the height of the image
        marginTop:8,
        marginLeft:10,
    },

    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buyBotContainer: {
        flex: 1,
        height: 110,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    buyBotContainer_1: {
        flex: 1,
        height: 310,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    priceViewContainer: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft:5,
        marginRight:10,
        height: 60,
        backgroundColor : 'white',
        borderRadius: 8,
        alignItems : 'center'
    },

    priceViewContainer_111: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        marginLeft:5,
        marginRight:10,
        backgroundColor : 'white',
        borderRadius: 8,
    },

    priceViewContainer_11: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        height: 180,
        backgroundColor : 'white',
        borderRadius: 8,
    },

    priceViewContainer_1: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft:5,
        marginRight:10,
        height: 60,
        backgroundColor : '#5D4CE0',
        borderRadius: 8,
        alignItems : 'center'
    },

    priceViewContainer_2: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft:5,
        marginRight:10,
        height: 60,
        backgroundColor : '#C75178',
        borderRadius: 8,
        alignItems : 'center'
    },

    priceView: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:55,
        marginLeft: 5,
        borderRadius: 10,
    },

    priceView_111: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:25,
        flexDirection: 'row', // Aligns image and text horizontally
        margin: 5,
        borderRadius: 3,
        justifyContent: "space-between",
    },

    priceView_1: {
        backgroundColor: '#F2F2F7',
        height:170,
        margin:5,
        borderRadius: 10,
    },

    titleText_1: {
        color: 'black',
        fontSize: 10,
        paddingTop: 10,
        paddingLeft: 10,
    },

    priceText_1: {
        color: 'black',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 10,
    },

    subContainer: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        width: '100%',
        height: 30,
    },

    titleDocuments: {
        flex: 1, // Take up remaining space between the images
        fontSize: 15,
        alignItems: 'center',
        marginLeft: 5,
    },
});

export default BotBuyName;