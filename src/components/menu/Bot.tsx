import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  View, StyleSheet, TouchableOpacity, Text, Image, Button, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Bot = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        console.log("Selected Index navigate back")
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
        
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.tapContainer}>
                <View style={styles.shadowBox} >
                    <LinearGradient
                        colors={['#2AACF5', '#9100EB']}
                        style={styles.linearGradient}
                    >
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
                        
                        

                    </LinearGradient>
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
    linearGradient: {
        height: 130,
        width: '100%',
        marginTop: -10,
        borderRadius: 10,  // Rounded corners
    
      },
      shadowBox: {
        width: '100%',
        height: 133,
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
        marginTop:40,
        
    },
    view: {
        flex: 1,               // Equal width for each button
        backgroundColor: 'white',
        padding: 10,
        margin: 12,
        height:70,
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
        height:55,
        margin: 5,
        borderRadius: 10,
    },

    titleText: {
        color: 'black',
        fontSize: 11,
        marginTop:10
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
        flexDirection: 'column',  // Arrange buttons horizontally
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
        height: 40,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
        borderColor: '#C8CED1',
        borderWidth: 1,
    },

    priceContainer: {
        justifyContent: 'space-evenly',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        height: 55,
        backgroundColor: '#F2F2F7',
        borderRadius: 8,
    },

    priceViewContainer: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
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
        height: 40,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    buyBotContainer: {
        flex: 1,
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
        width: '100%', 
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
    },
});

export default Bot;