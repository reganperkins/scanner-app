import * as React from 'react';
import styles from './intro-styles';
import { View, Text, TouchableOpacity } from 'react-native';
import IDImage from '../../components/id-image';
import {
  NavigationParams,
  NavigationState,
  NavigationScreenProp,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
};

const IntroPage = (props: Props) => {
  return (
    <View style={styles.container}>
      <IDImage />
      <View style={styles.introText}>
        <Text style={styles.heading}>Helping you verify</Text>
        <Text style={styles.tagline}>Simplify information gathering with</Text>
        <Text style={styles.tagline}>our quick and handy ID scanner</Text>
      </View>
      
      <TouchableOpacity onPress={() => props.navigation.navigate('Scanner')} style={styles.startBtn}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

IntroPage.navigationOptions = { header: null };

export default IntroPage;