import * as React from 'react';
import { View } from 'react-native';
import styles from './stylesheet';


const IntroPage = () => {
 return (
    <View style={styles.wrapper}>
      <View style={styles.id}>
        <View style={styles.province}></View>
        <View style={styles.content}>
          <View style={styles.photo}>
            <View style={styles.userHead}></View>
            <View style={styles.userBody}></View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.text}></View>
            <View style={styles.text}></View>
            <View style={styles.text}></View>
            <View style={styles.dottedText}></View>
          </View>
        </View>
      </View>
    </View>
 )
};

export default IntroPage;
