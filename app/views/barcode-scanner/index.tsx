import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './barcode-scanner-styles';
import CameraDenied from '../../components/camera-denied';

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
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

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
