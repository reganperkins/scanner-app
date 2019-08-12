import * as React from 'react';
import styles from './id-details-styles';
import { View, Text } from 'react-native';

export default class IntroPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Results</Text>
        <View style={styles.table}>
          { this.getRows() }
        </View>
      </View>
    );
  }

  getRows() {
    const paramDataPairs = Object.entries(this.props.navigation.state.params);
    const rowElements = paramDataPairs.map((entry) => {
      return this.renderRow(entry[0], entry[1]);
    });
    return rowElements;
  }

  renderRow(identifier, content) {
    if (!content) return;
    return (
      <View style={styles.row} key={identifier}>
          <View style={styles.identifier}>
            <Text style={styles.tagline}>{identifier}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.tagline}>{content}</Text>
          </View>
        </View>
    );
  }
}
