// screens/HomeScreen.tsx

import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import useFetch from '../hooks/useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}
// The `HomeScreen` does not require any params
const HomeScreen = ({ navigation }: { navigation: any }) => {
    const { data, error, isLoading } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {isLoading && <ActivityIndicator size="large" />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {data && !isLoading && !error && (
        <View>
          {data.map((post) => (
            <View key={post.id} style={{ marginBottom: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>{post.title}</Text>
              <Text>{post.body}</Text>
            </View>
          ))}
        </View>
      )}
      {!isLoading && !error && data?.length === 0 && (
        <Text>No posts found</Text>
      )}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: 42 })}
      />
    </View>
   
  );
};

export default HomeScreen;
