import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroPage from './app/components/id-image/id-image';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Your app!</Text>
      <IntroPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
