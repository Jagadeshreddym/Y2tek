// screens/DetailsScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';

// The `DetailsScreen` receives the `itemId` as a param
const DetailsScreen = ({ route }: { route: any }) => {
  const { itemId } = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};

export default DetailsScreen;
