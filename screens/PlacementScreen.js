import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo-barcode-scanner';

export default class BarcodeScannerExample extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
            hasCameraPermission: null,
            barcodeData: "",
            barcodeType: ""
    };
}
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }

    render() {
      if (this.state.hasCameraPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      } else if (this.state.hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      }
      return (
            <View style={{width: 500 , height:500}}>
              <BarCodeScanner
                onBarCodeScanned={this.handleBarCodeScanned.bind(this)}
                style={StyleSheet.absoluteFill}
              />
              <Text>Bar code with type {this.state.barcodeType} and data {this.state.barcodeData} has been scanned!</Text>
            </View>
      );
  }

handleBarCodeScanned(type,data){
  this.setState({
        barcodeType : JSON.stringify(type),
        barcodeData : JSON.stringify(data)
  });
}; 
}