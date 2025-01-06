// screens/DetailsScreen.tsx

import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, TextInput } from 'react-native';

const UserProfile = () => {

const [phoneNumber, setPhoneNumber] = useState('');
const [address, setAddress] = useState('');
  
return (
  <View style={{ height: "100%", flexDirection: 'column' }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
          <Image source={require('../../assets/images/robo_bolt.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.navigationTitle}>Profile</Text>
      </View>  
      <ScrollView style={{marginTop:10}}>
      <View style={styles.profile}>
        <Image source={require('../../assets/images/robo_bolt.png')} style={styles.image} />
        <Text style={styles.title}>user@emailid.com</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber} // Updates the text state as the user types
            placeholder="Enter Phone Number"
          />
          <TouchableOpacity onPress={() => alert('Button pressed!')}>
            <Text style={styles.updateButtonText}>UPDATE</Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress} // Updates the text state as the user types
            placeholder="Enter Address"
          />
          <TouchableOpacity onPress={() => alert('Button pressed!')}>
            <Text style={styles.updateButtonText}>UPDATE</Text>
          </TouchableOpacity> 
        </View>
      </View>

      
      <View style={styles.documentsDetails}>
        <View style={styles.documents}>
          <Image source={require('../../assets/images/robo_bolt.png')} style={styles.documentsIcon} />
          <Text style={styles.documentsText}>Documents</Text>
        </View>

        <View style={styles.docInputContainer}>
          <View style={styles.subContainer}>
            <Image source={require('../../assets/images/robo_bolt.png')} style={styles.icon} />
            <Text style={styles.titleDocuments}>ID Proof</Text>
            <View style={styles.infoDocumentsView}>
              <Image source={require('../../assets/images/robo_bolt.png')} style={styles.documentsIcon} />
              <Text style={styles.infoDocumentsStatus}>Rejected</Text>
            </View>
          </View>

          <View style={styles.infoDocumentsViewProof}>
            <TouchableOpacity onPress={() => alert('Button pressed!')}>
              <View style={styles.infoDocumentsViewButtonResend}>
                <Text style={styles.viewText}>View</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Button pressed!')}>
              <View style={styles.infoDocumentsViewButtonResend}>
                <Text style={styles.viewText}>Resend</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.guideLines}>
              <Text style={styles.guideLinesText}>Admin as requested to resend this document as it does not meet our guidelines. Read Guidelines</Text>
          </View>


        </View>

        <View style={styles.addressProofContainer}>
          <View style={styles.subContainer}>
            <Image source={require('../../assets/images/robo_bolt.png')} style={styles.icon} />
            <Text style={styles.titleDocuments}>Address Proof</Text>
            <View style={styles.infoDocumentsViewApproved}>
              <Image source={require('../../assets/images/robo_bolt.png')} style={styles.documentsIcon} />
              <Text style={styles.infoDocumentsStatus}>Approved</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => alert('Button pressed!')}>
            <View style={styles.infoDocumentsViewButton}>
              <Text style={styles.viewText}>View</Text>
            </View>
            </TouchableOpacity> 
        </View>

        <View style={styles.addressProofContainer}>
          <View style={styles.subContainer}>
            <Image source={require('../../assets/images/robo_bolt.png')} style={styles.icon} />
            <Text style={styles.titleDocuments}>Passport</Text>
            <View style={styles.infoDocumentsViewPending}>
              <Image source={require('../../assets/images/robo_bolt.png')} style={styles.documentsIcon} />
              <Text style={styles.infoDocumentsStatus}>Pending</Text>
              <Image source={require('../../assets/images/robo_bolt.png')} style={styles.documentsIcon} />
            </View>
          </View>
          <TouchableOpacity onPress={() => alert('Button pressed!')}>
            <View style={styles.infoDocumentsViewButton}>
              <Text style={styles.viewText}>View</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>

        <View style={styles.bottomView}>
             <Text style={styles.deactivateAcctext}>Deactivate Account</Text>
        </View>
    </ScrollView> 
    </View>
  );
};

const styles = StyleSheet.create({

  navigationTitle: {
    color: 'black', // Text color
    fontSize: 14,   // Text font size
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
    marginLeft: 10,
  },

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
    backgroundColor: 'clear', // Button background color
    height:45,
  },
  icon: {
    width: 30,  // Set the width of the image
    height: 20, // Set the height of the image
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5, // Make the images circular
    justifyContent:'center',
    alignItems:'center',
    marginTop: 15,
    marginBottom: 15,
  },
  
  text: {
    color: 'black', // Text color
    fontSize: 14,   // Text font size
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
    marginLeft: 10,
  },

  title: {
    flex: 1, // Take up remaining space between the images
    fontSize: 16,
    alignItems:'center',
    marginTop:4,
  },
  profile: {
    flex: 1, // Take up remaining space between the images
    alignItems:'center',
    backgroundColor: 'white',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderRadius: 5,
  },

  bottomView: {
    flex: 1, // Take up remaining space between the images
    alignItems:'center',
    backgroundColor: '#C4CACD',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderRadius: 5,
    height : 45,
  },

  inputContainer: {
    height: 45,
    backgroundColor: 'white',
    marginTop:10,
    borderRadius: 8,
    flexDirection: 'row', // Aligns image and text horizontally
    width: '93%',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 10,
  },

  input: {
    height: 45,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },

  updateButtonText: {
    color: '#695DCA', // Text color
    fontSize: 13,   // Text font size
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
    marginBottom:10,
  },

  deactivateAcctext: {
    color: 'black', // Text color
    fontSize: 16,   // Text font size
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
  },

  documents: {
    flexDirection: 'row', // Aligns image and text horizontally
    height:50,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  documentsDetails: {
    flex: 1, // Take up remaining space between the images
    backgroundColor: 'white',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderRadius: 5,
  },

  documentsIcon: {
    width: 30,  // Set the width of the image
    height: 20, // Set the height of the image
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
  },

  documentsText: {
    color: '#695DCA', // Text color
    fontSize: 15,   // Text font size
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
  },

  docInputContainer: {
    height: 130,
    backgroundColor: '#DCDCE0',
    borderRadius: 8,
    borderColor: '#695DCA',
    borderWidth: 1,
    fontSize: 16,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
  },

  subContainer: {
    flexDirection: 'row', // Aligns image and text horizontally
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
  },

  titleDocuments: {
    flex: 1, // Take up remaining space between the images
    fontSize: 16,
    alignItems:'center',
    marginLeft: 5,
  },

  infoDocumentsStatus: {
    fontSize: 16,
    color: 'white', // Text color
    marginRight: 10,
  },

  infoDocumentsView:{
    flexDirection: 'row', // Aligns image and text horizontally
    backgroundColor: 'red',
    marginRight: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 30,
  },

  addressProofContainer: {
    height: 80,
    backgroundColor: '#DCDCE0',
    borderRadius: 8,
    borderColor: '#695DCA',
    borderWidth: 1,
    fontSize: 16,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
  },

  infoDocumentsViewApproved:{
    flexDirection: 'row', // Aligns image and text horizontally
    backgroundColor: 'green',
    marginRight: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 30,
  },

  infoDocumentsViewButton:{
    backgroundColor: '#695DCA',
    marginRight: 5,
    marginLeft: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 33,
  },

  viewText: {
    fontSize: 16,
    color: 'white', // Text color
    marginTop: 5,
    marginBottom: 5,
    alignItems:'center',
  },

  infoDocumentsViewPending:{
    flexDirection: 'row', // Aligns image and text horizontally
    backgroundColor: '#E8A14B',
    marginRight: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 30,
  },

  infoDocumentsViewProof:{
    flexDirection: 'row', // Aligns image and text horizontally
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
  },

  infoDocumentsViewButtonResend:{
    backgroundColor: '#695DCA',
    alignItems:'center',
    borderRadius: 5,
    height: 33,
    flexDirection: 'row', // Aligns image and text horizontally
    marginLeft : 5,
    marginRight: 5,
    width: 150,
  },

  guideLines:{
    backgroundColor: '#DFBEC7',
    marginRight: 5,
    marginLeft:5,
    alignItems:'center',
    borderRadius: 5,
    height: 40,
  },

  guideLinesText: {
    fontSize: 10,
    color: 'red', // Text color
    marginRight: 5,
    marginLeft:5,
    marginTop: 5,
    marginBottom:5,
  },

});

export default UserProfile;
