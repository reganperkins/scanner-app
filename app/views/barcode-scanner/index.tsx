import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './barcode-scanner-styles';

export default class BarcodeScanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.hi}>
        <Text>Hi</Text>
      </View>
    );
  }
}
