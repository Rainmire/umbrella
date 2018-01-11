// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Image,
//   Text,
//   Button,
//   FlatList,
//   TextInput,
//   TouchableOpacity,
//   AsyncStorage,
//   Dimensions
// } from 'react-native';
// import { TabNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Camera from 'react-native-camera';
//
// class CaptureImage extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   _takePicture() {
//     alert('picture taken!');
//     // const options = {};
//     // //options.location = ...
//     // this.camera.capture({metadata: options})
//     //   .then((data) => console.log(data))
//     //   .catch(err => console.error(err));
//   }
//
//   render() {
//     console.log('new moment props: ', this.props);
//     return (
//       <View>
//         <Camera
//           ref={(cam) => {
//             this.camera = cam;
//           }}
//           style={styles.preview}
//           aspect={Camera.constants.Aspect.fill}>
          // <TouchableOpacity onPress={this._takePicture.bind(this)}>
            // <Icon name='camera'
            //       style={styles.capture}
            //       size={50}
            //       color='#000'
            //       onPress={this._takePicture.bind(this)}
            // />
          // </TouchableOpacity>
//         </Camera>
//       </View>
//     );
//   }
// }
//
// export default CaptureImage;
//
// export const styles = StyleSheet.create({
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     height: Dimensions.get('window').height,
//     width: Dimensions.get('window').width,
//     backgroundColor: 'purple'
//   },
//   capture: {
//     borderRadius: 37,
//     padding: 10,
//     borderWidth: 2,
//     backgroundColor: 'pink',
//     justifyContent: 'flex-end',
//   },
// });

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Icon,
  Image
} from 'react-native';
import Camera from 'react-native-camera';

class CaptureImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: null,
    };
  }

  takePicture() {
    // comment out alert once we know it's working
    alert('image captured');
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => {
        console.log('image data', data);
        this.setState({path: data.path});
      })
      .catch(err => console.error(err));
  }

  renderImage() {
    return(
      <View>
        <Image
          source={{ uri: this.state.path }}
          style={styles.preview}
        />
        <Text
          style={styles.cancel}
          onPress={ () => this.setState({ path: null })}
        >Cancel
        </Text>
      </View>
    );
  }

  renderCamera() {
    return(
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        <Text
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
        >[CAPTURE]</Text>
      </Camera>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.path? this.renderImage() : this.renderCamera() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    margin: 40,

  }
});
export default CaptureImage;
