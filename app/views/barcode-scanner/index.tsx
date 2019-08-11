import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './barcode-scanner-styles';
import CameraDenied from '../../components/camera-denied';
import { string } from 'prop-types';

export default class BarcodeScanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false,
    };
  }

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <CameraDenied navigation={this.props.navigation} />;
    }
    return (
      <View style={styles.mainWrapper}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {/* scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        ) */}

      </View>
    );
  }

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    if (type === 'org.iso.PDF417') {
      this.handlePDF417(data);
    }
  };

  handlePDF417 = (PDF417: string) => {
    alert(`data ${PDF417} has been scanned!`);
    console.log(`data ${PDF417} has been scanned!`);
    const dataArray = PDF417.split('?');
    const basicInfo = this.getBasicInfo(dataArray[0]); 

    const detailedInfo = this.getDetailedInfo(dataArray[2]);

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
    details.sex = detailedInfo[1][0];
    details.height = `${detailedInfo[1].slice(1)}cm`;
    details.weight = `${detailedInfo[2].match(/^\d+/g)[0]}kg`;
    detailedInfo[2] = detailedInfo[2].slice(details.weight.length);
    details.hairColor = detailedInfo[2].slice(0, 3);
    details.eyeColor = detailedInfo[2].slice(3, 6);
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

 
  //  Bar code with type org.iso.PDF417
  //  data %BCVANCOUVER^LITTLE,$MATTHEW COLIN^101-1422 3RD AVE E$VANCOUVER BC  V5N 5R5^?;6360287447162=220519850520=?_%0AV5N5R5                     M178 75BRNGRN9015103477                A%  K/WNNBB?

}
