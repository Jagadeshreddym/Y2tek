import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {  View, StyleSheet, Text, Image, ScrollView ,TouchableOpacity} from 'react-native';

const BotSummary = () => {
    const navigation = useNavigation();
    const data = {
        'Symbol': 'Bitcoin (BTCUSDT)',
        'Initial Capital USD': '$50',
        'Margin': '100%',
        'Target Profit/Goal': '5% / 6%',
        'Stoploss/Goal': '5% / 6%',
        'Max Drawdown Limit': '$10',
        'Position Open Order Type':'Market',
        'Target Hit Order Type':'Market',
        'Position Close Order Type':'Market',
        'Unfilled Order Behavior':'Replace',
        'Order Qulaity Type':'Percentage',
        'Limit Order Price Reference Level':'1',
        'Unfilled Order Timeout':'30',
        'Order Quality Value':'100',
        'Transaction Cost in Basis Points':'5',

      };
    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
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
                    <Text style={styles.text}>Bot Summary</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.subView_1}>
                    <View style={styles.subView}>
                        <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        <Text style={styles.text_1}>Bitcoin_Buy_5m_5_3_2024_01_23_10...</Text>
                    </View>

                    <View style={styles.subView}>
                        <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        <Text style={styles.text_1}>2024-01-23</Text>
                        <Text style={styles.text_1}>10:11 PM</Text>
                    </View>

                    {Object.entries(data).map(([key, value], index) => (
                        <View key={index} style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>{key}</Text>
                            <Text style={styles.text_2}>{value}</Text>
                        </View>
                    ))}

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>ML Bot</Text>
                            <Text style={styles.text_2}>Buy</Text>
                        </View>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Timeframe</Text>
                            <Text style={styles.text_2}>5M</Text>
                        </View>
                    </View>

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Trailing Target</Text>
                            <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        </View>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Reinvest Profit</Text>
                            <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        </View>
                    </View>

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Trailing Stoploss</Text>
                            <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        </View>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Allow Shorting</Text>
                            <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        </View>
                    </View>


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

    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },

    scrollContainer: {
        flex: 1,
        width: '100%',  
    },

    subView: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 35,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        borderRadius: 8,
    },

    subView_1: {
        flex:1,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        paddingBottom:10,
        borderRadius: 8,
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

    timeIcon: {
        width: 23,  // Set the width of the image
        height: 23, // Set the height of the image
        marginTop:8,
        marginLeft:5,
    },

    subViewWithBorder: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
        borderWidth:1,
        borderColor: '#E9E7F7',
        // justifyContent: 'space-evenly',  // Equal spacing between buttons
        // alignItems: 'center', 
    },

    text_2: {
        color: 'black',
        fontSize: 15,
        paddingTop: 10,
        marginEnd: 10,
        justifyContent: "flex-end" ,
    },

    text_3: {
        color: 'gray',
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 10,
        marginEnd: 10,
    },

    priceViewContainer_111: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        marginLeft:5,
        marginRight:10,
        paddingTop:15,
        backgroundColor : 'white',
        borderRadius: 8,
        justifyContent: 'space-evenly',  // Equal spacing between buttons
        alignItems: 'center', 
    },


});

export default BotSummary;
