import * as React from 'react';
import styles from './id-details-styles';
import { View, Text } from 'react-native';
import {
  NavigationParams,
  NavigationState,
  NavigationScreenProp,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
};

const IdDetails = (props: Props) => {

  function getRows() {
    const paramDataPairs = Object.entries(props.navigation.state.params);
    const rowElements = paramDataPairs.map((entry) => {
      return renderRow(entry[0], entry[1]);
    });
    return rowElements;
  }

  function renderRow(identifier, content) {
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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Results</Text>
      <View style={styles.table}>
        { getRows() }
      </View>
    </View>
  );
}

export default IdDetails;