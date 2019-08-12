import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './barcode-scanner-styles';
import CameraDenied from '../../components/camera-denied';
import { sex, color } from './abbreviations';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
};

interface State {
  hasCameraPermission?: boolean,
  scanned: boolean
};

export default class BarcodeScanner extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false,
    };
  }

  helpTimer = null;

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <CameraDenied />;
    }
    return (
      <View style={styles.mainWrapper}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    );
  }

  async componentDidMount() {
    this.getPermissionsAsync();
    const openHelpAlert = this.openHelpAlert;
    this.helpTimer = setTimeout(openHelpAlert, 30000);
  }

  componentWillUnmount() {
    clearTimeout(this.helpTimer);
  }

  openHelpAlert() {
    alert('If you are having issues scanning your ID try moving somewhere with natural light or tilting the card.');
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    if (type === 'org.iso.PDF417') {
      this.handlePDF417(data);
    }
  };

  handlePDF417 = (PDF417: string) => {
    const dataArray = PDF417.split('?');
    const basicInfo = this.getBasicInfo(dataArray[0]); 
    const detailedInfo = this.getDetailedInfo(dataArray[2]);

    const details = Object.assign({}, basicInfo, detailedInfo);
    this.props.navigation.replace('Details', details);
  };

  getDetailedInfo(text: string) {
    const details = {
      sex: null,
      weight: null,
      height: null,
      eyeColor: null,
      hairColor: null,
      PHN: null,
    };

    let detailedInfo: Array<String> = text.replace(/  +/g, ' ').split(' ');
    details.sex = sex[detailedInfo[1][0]];
    details.height = `${detailedInfo[1].slice(1)}cm`;
    const weight = detailedInfo[2].match(/^\d+/g)[0];
    detailedInfo[2] = detailedInfo[2].slice(weight.length);
    details.weight = `${weight}kg`;
    details.hairColor = color[detailedInfo[2].slice(0, 3)] || detailedInfo[2].slice(0, 3);
    details.eyeColor = color[detailedInfo[2].slice(3, 6)] || detailedInfo[2].slice(3, 6);
    details.PHN = detailedInfo[2].slice(6);

    return details;
  }

  getBasicInfo(text: string) {
    const details = {
      zip: null,
      address: null,
      province: null,
      city: null,
      firstName: null,
      middleName: null,
      lastName: null,
    };

    const basicInfo: Array<String> = text.split('^');
    let name = basicInfo[1].split(',');
    let firstNames = name[1].split(' ');
    details.firstName = firstNames[0].slice(1);
    details.middleName = firstNames[1];
    details.lastName = name[0];
    
    let addressDetails: any = basicInfo[2];
    details.zip = addressDetails.slice(addressDetails.length - 7);
    addressDetails = addressDetails.slice(0, addressDetails.length - 7).trim();
    addressDetails = addressDetails.split('$');
    details.address = addressDetails[0];
    details.province = addressDetails[1].slice(-2);
    details.city = addressDetails[1].slice(0, -2);

    return details;
  }
}
