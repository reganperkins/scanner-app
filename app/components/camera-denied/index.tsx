import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './camera-denied-styles';

const cameraDenied = (props) => {
  return (
    <View style={styles.deniedWrapper}>
      <Text style={styles.heading}>Camera access was denied</Text>
      <Text style={styles.text}>This scanner app requires access to the camera. If you wish to continue please follow these steps:</Text>
      <View style={styles.list}>
        <Text style={styles.text}>1. Close the app</Text>
        <Text style={styles.text}>2. Open Settings</Text>
        <Text style={styles.text}>3. Find and click on Scanner app</Text>
        <Text style={styles.text}>4. Toggle the camera permissions</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backBtn}>
        <Text style={styles.btnText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default cameraDenied;