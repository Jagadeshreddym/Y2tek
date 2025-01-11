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

const PieChartView = ({data}) => {
  // Data for the donut chart
  

  // Colors for each section
  const colors = ['#4182f2', '#7abf21', '#8073de', '#faa134'];

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
    <View >
      <PieChart
        style={{height:300, width:'100%', marginTop:20, borderRadius:10, shadowColor: '#6d5dd4', 
          shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.3,shadowRadius: 6,elevation: 8,}}
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



export default PieChartView;
