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

  getDetailedInfo(detailedInfo: string) {
    const details = {
      sex: null,
      weight: null,
      eyeColor: null,
      hairColor: null,
      PHN: null,
    };
  }

  getBasicInfo(basicInfo: string) {
    const details = {
      zip: null,
      address: null,
      province: null,
      city: null,
      firstName: null,
      middleName: null,
      lastName: null,
    };

    const basicInfoArray = basicInfo.split('^');
    let name = basicInfoArray[1].split(',');
    details.lastName = name[0];
    let firstNames = name[1].split(' ');
    details.firstName = firstNames[0].slice(1);
    details.middleName = firstNames[1];
    
    let addressDetails: any = basicInfoArray[2];
    details.zip = addressDetails.slice(addressDetails.length - 7);
    addressDetails = addressDetails.slice(0, addressDetails.length - 7).trim();
    addressDetails = addressDetails.split('$');
    details.address = addressDetails[0];
    details.province = addressDetails[1].slice(-2);
    details.city = addressDetails[1].slice(0, -2);

    console.log('details', details)
    console.log('basicInfoArray', basicInfoArray)
    console.log('name', name, 'addressDetails', addressDetails)
    return details;
  }

 

  // getPermissionDeniedElement() {
  //   return (
  //     <View style={styles.deniedWrapper}>
  //       <Text style={styles.heading}>Camera access was denied</Text>
  //       <Text style={styles.text}>This scanner app requires access to the camera. If you wish to continue please follow these steps:</Text>
  //       <View style={styles.list}>
  //         <Text style={styles.text}>1. Close the app</Text>
  //         <Text style={styles.text}>2. Open Settings</Text>
  //         <Text style={styles.text}>3. Find and click on Scanner app</Text>
  //         <Text style={styles.text}>4. Toggle the camera permissions</Text>
  //       </View>
  //       <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backBtn}>
  //         <Text style={styles.btnText}>Back</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }
}




function getBasicInfo (basicInfo) {
  const details = {
    zip: null,
    address: null,
    province: null,
    city: null,
    firstName: null,
    middleName: null,
    lastName: null,
  };

  const basicInfoArray = basicInfo.split('^');
  let name = basicInfoArray[1].split(',');
	details.lastName = name[0];
	let firstNames = name[1].split(' ');
	details.firstName = firstNames[0].slice(1);
  details.middleName = firstNames[1];
  
  let addressDetails = basicInfoArray[2];
  details.zip = addressDetails.slice(addressDetails.length - 7);
  addressDetails = addressDetails.slice(0, addressDetails.length - 7).trim();
  addressDetails = addressDetails.split('$');
  details.address = addressDetails[0];
  details.province = addressDetails[1].slice(-2);
  details.city = addressDetails[1].slice(0, -2);

  console.log('details', details)
  console.log('basicInfoArray', basicInfoArray)
  console.log('name', name, 'addressDetails', addressDetails)
  return details;
}
