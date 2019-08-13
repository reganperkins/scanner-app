import React from 'react';
import Intro from './app/views/intro';
import Details from './app/views/id-details';
import BarcodeScanner from './app/views/barcode-scanner';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Intro: {
    screen: Intro,
  },
  Scanner: {
    screen: BarcodeScanner,
  },
  Details: {
    screen: Details,
  },
}, {
    initialRouteName: 'Intro',
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

export default App;