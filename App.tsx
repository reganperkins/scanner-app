import React from 'react';
import IntroPage from './app/views/intro';
import BarcodeScanner from './app/views/barcode-scanner';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Intro: {
    screen: IntroPage,
  },
  Scanner: {
    screen: BarcodeScanner,
  },
}, {
    initialRouteName: 'Intro',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
