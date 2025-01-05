import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text, G } from 'react-native-svg';
import * as d3 from 'd3-shape';

// Define types for slice data
interface SliceData {
  pieCentroid: [number, number];
  data: {
    value: number;
  };
}

const Portfolio = () => {
  // Data for the donut chart
  const data = [25, 16, 21, 18];

  // Colors for each section
  const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff'];

  // Chart sections configuration
  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: colors[index],
        cornerRadius: 10,  // Apply rounded corners
        onPress: () => console.log('Pressed on section: ', index),
      },
      key: `pie-${index}`,
    }));
    const arcGenerator = d3.arc().outerRadius(10).innerRadius(0);  // Define inner and outer radius


  // Custom Label Component
  const Label = ({ slices }: { slices: SliceData[] }) => {
    return (
      <G>
        {slices.map((slice, index) => {
          const { pieCentroid, data } = slice;
          return (
            <Text
              key={index}
              x={pieCentroid[0]}
              y={pieCentroid[1]}
              fill="white"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize={18}
              
            >
              {data.value}
            </Text>
          );
        })}
      </G>
    );
  };

  return (
    <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
      <PieChart
        style={{height:500, width:'100%', marginTop:20, borderRadius:10}}
        outerRadius="60%"  // Makes the chart a donut by reducing outer radius
        innerRadius="40%"  // Creates the hole in the middle
        data={pieData}
      >
        {/* Adding custom labels */}
        <Label slices={[]} />
      </PieChart>
    </View>
  );
};
const styles =  StyleSheet.create({
  
    shadowBox: {
        width: '100%',
        height: 473,
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
      text: {
        fontSize: 18,
        marginVertical: 10,
      },
  });

export default Portfolio;
