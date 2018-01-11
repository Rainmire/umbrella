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

// don't forget to change root navigator if connect to container
class CaptureImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: null,
    };
  }

  componentDidMount() {
    console.log('camera screen props: ', this.props);
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

// not sure what's happening here with this... what screen is it going
// to when the picture is taken? The text is not displayed, but when
// you click back, it is displayed momentarily during the transition
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
        <Text
          style={styles.select}
          onPress={ () => this.props.navigation.navigate('MomentForm', {path: this.state.path})}
        >Use this picture
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

export default CaptureImage;

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
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  select: {
    position: 'absolute',
    right: 50,
    top: 50,
    backgroundColor: 'blue',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
