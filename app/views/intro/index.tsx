import * as React from 'react';
import styles from './intro-styles';
import { View, Text, TouchableOpacity } from 'react-native';
import IDImage from '../../components/id-image';

export default class IntroPage extends React.Component {
  static navigationOptions = { header: null };
  
  render() {
    return (
      <View style={styles.container}>
        <IDImage />
        <View style={styles.introText}>
          <Text style={styles.heading}>Helping you verify</Text>
          <Text style={styles.tagline}>Simplify information gathering with</Text>
          <Text style={styles.tagline}>our quick and handy ID scanner</Text>
        </View>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Scanner')} style={styles.startBtn}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}