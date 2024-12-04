import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CardProps {
  title: string;
  image1: any;
  image2: any;
  backgroundColor?: string;
  isHeader:boolean;
}

const Card: React.FC<CardProps> = ({ title, image1, image2, backgroundColor = 'white', isHeader}) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
    {
    isHeader ?(<View style={[styles.row,{height: 40}]}>
        {/* First Image */}
        <Image source={ image1 } style={styles.image} />
        {/* Second Image */}
        <Image source={image2 } style={styles.image} />
        {/* Text Content */}
        <Text style={styles.cardTitle}>{title}</Text>
      </View>) 
      : (<View style={[styles.row,{height:30}]}>
        {/* First Image */}
        <Image source={ image1 } style={styles.image} />

        {/* Text Content */}
        <Text style={styles.cardTitle}>{title}</Text>

        {/* Second Image */}
        <Image source={image2 } style={styles.image} />
      </View>)}
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
    width: 25,
    height: 25,
    borderRadius: 5, // Make the images circular
    marginRight: 10,
    marginTop:5,
    justifyContent:'center',
    alignItems:'center'

  },
  cardTitle: {
    flex: 1, // Take up remaining space between the images
    fontSize: 18,
    justifyContent:'center',
    marginTop:6
  },
});

export default Card;
