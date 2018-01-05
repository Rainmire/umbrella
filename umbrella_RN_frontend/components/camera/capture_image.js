import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Dimensions
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-camera';

class CaptureImage extends React.Component {
  constructor(props) {
    super(props);
  }

  _takePicture() {
    alert('picture taken!');
    // const options = {};
    // //options.location = ...
    // this.camera.capture({metadata: options})
    //   .then((data) => console.log(data))
    //   .catch(err => console.error(err));
  }

  render() {
    console.log('new moment props: ', this.props);
    return (
      <View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableOpacity onPress={this._takePicture.bind(this)}>
            <Icon name='camera'
                  style={styles.capture}
                  size={50}
                  color='#000'
                  onPress={this._takePicture.bind(this)}
            />
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }
}

export default CaptureImage;

export const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'purple'
  },
  capture: {
    borderRadius: 37,
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'pink',
    justifyContent: 'flex-end',
  },
});
